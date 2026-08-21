import { initializePayload } from '@/lib/payload-client';

export async function POST(req: Request) {
  try {
    const payload = await initializePayload();
    const body = await req.json();

    if (!payload) {
      console.warn('Payload not available for contact submission');
      return Response.json(
        { success: false, error: 'Database initializing. Please try again in a moment.' },
        { status: 503 }
      );
    }

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
    console.error('Contact form error:', error?.message);

    return Response.json(
      { success: false, error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
