import { initializePayload } from '@/lib/payload-client';

export async function GET(req: Request) {
  try {
    const payload = await initializePayload();

    const submissions = await payload.find({
      collection: 'contact-submissions',
      sort: '-createdAt',
    });

    return Response.json(submissions);
  } catch (error: any) {
    // Handle database not initialized or table doesn't exist
    if (error?.cause?.message?.includes('does not exist') ||
        error?.message?.includes('does not exist')) {
      console.warn('Database not initialized, returning empty array');
      return Response.json({ docs: [], totalDocs: 0 });
    }

    console.error('Submissions fetch error:', error);
    return Response.json(
      { docs: [], totalDocs: 0, error: 'Database not ready' },
      { status: 200 } // Return 200 to not break the app
    );
  }
}
