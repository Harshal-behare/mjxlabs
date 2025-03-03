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

// GET all blog posts
export async function GET() {
  try {
    await connectToDatabase();
    const posts = await BlogPost.find({}).sort({ timestamp: -1 });
    
    return NextResponse.json({ success: true, data: posts }, { status: 200 });
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

// POST a new blog post
export async function POST(request) {
  try {
    await connectToDatabase();
    
    const data = await request.json();
    
    // Validate required fields
    if (!data.title || !data.content || !data.author) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Create new blog post
    const newPost = new BlogPost({
      title: data.title,
      content: data.content,
      author: data.author,
      imageURL: data.imageURL || '',
      timestamp: new Date(),
    });
    
    await newPost.save();
    
    return NextResponse.json(
      { success: true, data: newPost },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error creating blog post:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
} 