import { initializePayload } from '@/lib/payload-client';

export async function POST(req: Request) {
  try {
    const payload = await initializePayload();

    // Check if admin user exists
    const users = await payload.find({
      collection: 'users',
      limit: 1,
    });

    const adminExists = users.docs && users.docs.length > 0;

    return Response.json({
      success: true,
      message: adminExists
        ? 'Payload CMS is initialized. Admin account exists.'
        : 'Payload CMS initialized. Please create an admin account.',
      initialized: adminExists,
    });
  } catch (error) {
    console.error('Admin init error:', error);
    return Response.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const payload = await initializePayload();
    return Response.json({ status: 'Payload CMS running' });
  } catch (error) {
    console.error('Admin status error:', error);
    return Response.json(
      { error: 'Payload CMS not initialized' },
      { status: 500 }
    );
  }
}
