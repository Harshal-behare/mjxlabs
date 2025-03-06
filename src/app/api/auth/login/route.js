import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';

const ADMIN_USERNAME = 'harshal1234';
const ADMIN_PASSWORD = 'hello';
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export async function POST(request) {
  try {
    const { username, password } = await request.json();

    // Check if credentials match the admin user
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Generate JWT token
      const token = jwt.sign(
        { 
          username,
          role: 'admin',
          isAdmin: true
        },
        JWT_SECRET,
        { expiresIn: '24h' }
      );

      // Return success response with token
      return NextResponse.json({
        success: true,
        message: 'Login successful',
        token
      });
    }

    // Return error for invalid credentials
    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}