import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    // Show token in console for debugging
    console.log('Received reCAPTCHA token:', token);

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA token is missing' },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    
    if (!secretKey) {
      console.log('Secret key is missing!');
      return NextResponse.json(
        { success: false, message: 'reCAPTCHA secret key is not configured' },
        { status: 500 }
      );
    }

    console.log('Using secret key:', secretKey.substring(0, 10) + '...');

    // Verify reCAPTCHA with Google
    const verificationUrl = `https://www.google.com/recaptcha/api/siteverify`;
    const verificationResponse = await fetch(verificationUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${secretKey}&response=${token}`,
    });

    const verificationResult = await verificationResponse.json();

    if (verificationResult.success) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'reCAPTCHA verification successful',
          score: verificationResult.score || null 
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: 'reCAPTCHA verification failed',
          errors: verificationResult['error-codes'] || []
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('reCAPTCHA verification error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
