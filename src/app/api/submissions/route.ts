import { initializePayload } from '@/lib/payload-client';

export async function GET(req: Request) {
  try {
    const payload = await initializePayload();

    const submissions = await payload.find({
      collection: 'contact-submissions',
      sort: '-createdAt',
    });

    return Response.json(submissions);
  } catch (error) {
    console.error('Submissions fetch error:', error);
    return Response.json(
      { error: 'Failed to fetch submissions' },
      { status: 500 }
    );
  }
}
