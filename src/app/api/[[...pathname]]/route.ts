import payload from 'payload';
import config from '@/../../payload/payload.config';

const initPayload = async () => {
  if (!payload.email) {
    await payload.init({
      config,
      secret: process.env.PAYLOAD_SECRET,
    });
  }
};

export const POST = async (req: Request) => {
  await initPayload();
  return payload.bodyParser(req);
};

export const GET = async (req: Request) => {
  await initPayload();
  return payload.bodyParser(req);
};

export const PATCH = async (req: Request) => {
  await initPayload();
  return payload.bodyParser(req);
};

export const DELETE = async (req: Request) => {
  await initPayload();
  return payload.bodyParser(req);
};
