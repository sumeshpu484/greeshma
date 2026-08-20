import payload from 'payload';
import config from '@/../../payload/payload.config';

let initialized = false;

const initPayload = async () => {
  if (initialized) return payload;

  if (!payload.email) {
    await payload.init({
      config,
      secret: process.env.PAYLOAD_SECRET || 'test-secret',
    });
  }

  initialized = true;
  return payload;
};

export const GET = async (req: Request) => {
  try {
    const p = await initPayload();

    const url = new URL(req.url);

    // Handle admin UI requests
    if (url.pathname.startsWith('/admin')) {
      // Payload admin UI
      return new Response(null, { status: 307, headers: { Location: '/admin' } });
    }

    return new Response('Payload CMS Admin', { status: 200 });
  } catch (error) {
    console.error('Admin route error:', error);
    return new Response('Error initializing Payload', { status: 500 });
  }
};

export const POST = async (req: Request) => {
  const p = await initPayload();
  return await p.bodyParser(req);
};

export const PATCH = async (req: Request) => {
  const p = await initPayload();
  return await p.bodyParser(req);
};

export const DELETE = async (req: Request) => {
  const p = await initPayload();
  return await p.bodyParser(req);
};
