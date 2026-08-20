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
  } catch (error) {
    console.error('Contact form error:', error);
    return Response.json(
      { success: false, error: 'Failed to submit form' },
      { status: 500 }
    );
  }
}
