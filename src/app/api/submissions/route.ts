import { initializePayload } from '@/lib/payload-client';

export async function GET(req: Request) {
  try {
    const payload = await initializePayload();

    if (!payload) {
      console.warn('Payload not available, returning mock data');
      return Response.json({
        docs: [],
        totalDocs: 0,
        message: 'Database initializing'
      });
    }

    const submissions = await payload.find({
      collection: 'contact-submissions',
      sort: '-createdAt',
    });

    return Response.json(submissions);
  } catch (error: any) {
    console.warn('Submissions fetch error (returning fallback):', error?.message);

    // Always return a valid response, never fail
    return Response.json(
      {
        docs: [],
        totalDocs: 0,
        message: 'Database temporarily unavailable'
      },
      { status: 200 }
    );
  }
}
