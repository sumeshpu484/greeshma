import { initializePayload } from '@/lib/payload-client';

export async function POST(req: Request) {
  try {
    const payload = await initializePayload();
    const body = await req.json();

    const submission = await payload.create({
      collection: 'contact-submissions',
      data: {
        name: body.name,
        email: body.email,
        phone: body.phone || '',
        subject: body.subject,
        message: body.message,
        read: false,
      },
    });

    return Response.json({ success: true, id: submission.id });
  } catch (error: any) {
    // Handle database not initialized
    if (error?.cause?.message?.includes('does not exist') ||
        error?.message?.includes('does not exist')) {
      console.warn('Database not initialized');
      return Response.json(
        { success: false, error: 'Database not ready. Please initialize Payload CMS.' },
        { status: 503 } // Service unavailable
      );
    }

    console.error('Contact form error:', error);
    return Response.json(
      { success: false, error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
