import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// MongoDB connection
const MONGODB_URI = process.env.MONGODB_URI;

// BlogPost Schema
const BlogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for this blog post'],
    maxlength: [100, 'Title cannot be more than 100 characters'],
  },
  content: {
    type: String,
    required: [true, 'Please provide content for this blog post'],
  },
  author: {
    type: String,
    required: [true, 'Please provide an author name'],
    maxlength: [50, 'Author name cannot be more than 50 characters'],
  },
  imageURL: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

// Only compile the model if it hasn't been compiled before
let BlogPost;
try {
  BlogPost = mongoose.model('BlogPost');
} catch {
  BlogPost = mongoose.model('BlogPost', BlogPostSchema);
}

// Connect to MongoDB
async function connectToDatabase() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  
  if (!MONGODB_URI) {
    throw new Error('MONGODB_URI is not defined');
  }
  
  return mongoose.connect(MONGODB_URI);
}

// GET a single blog post by ID
export async function GET(request, { params }) {
  try {
    await connectToDatabase();
    
    const { id } = params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid blog post ID' },
        { status: 400 }
      );
    }
    
    const post = await BlogPost.findOne({ _id: id, status: 'published' });
    
    if (!post) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      data: post 
    });
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// UPDATE a blog post by ID
export async function PUT(request, { params }) {
  try {
    await connectToDatabase();
    
    const { id } = params;
    const data = await request.json();
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid blog post ID' },
        { status: 400 }
      );
    }
    
    // For status update, we only need the status field
    if (data.status !== undefined) {
      if (!['draft', 'published'].includes(data.status)) {
        return NextResponse.json(
          { success: false, error: 'Invalid status value' },
          { status: 400 }
        );
      }
      const updatedPost = await BlogPost.findByIdAndUpdate(
        id,
        { status: data.status },
        { new: true, runValidators: true }
      );
      
      if (!updatedPost) {
        return NextResponse.json(
          { success: false, error: 'Blog post not found' },
          { status: 404 }
        );
      }
      
      return NextResponse.json({ 
        success: true, 
        data: updatedPost 
      });
    }

    // For full post update, validate required fields
    if (!data.title || !data.content || !data.author) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      {
        title: data.title,
        content: data.content,
        author: data.author,
        imageURL: data.imageURL || '',
        status: data.status || 'draft',
      },
      { new: true, runValidators: true }
    );
    
    if (!updatedPost) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      data: updatedPost 
    });
  } catch (error) {
    console.error('Error updating blog post:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

// DELETE a blog post by ID
export async function DELETE(request, { params }) {
  try {
    await connectToDatabase();
    
    const { id } = params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { success: false, error: 'Invalid blog post ID' },
        { status: 400 }
      );
    }
    
    const deletedPost = await BlogPost.findByIdAndDelete(id);
    
    if (!deletedPost) {
      return NextResponse.json(
        { success: false, error: 'Blog post not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      data: {} 
    });
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}