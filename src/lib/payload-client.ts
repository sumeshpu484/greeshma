import payload from 'payload';
import config from '../../payload/payload.config';

let initialized = false;

export const initializePayload = async () => {
  if (initialized) {
    return payload;
  }

  if (!payload.email) {
    await payload.init({
      config,
      secret: process.env.PAYLOAD_SECRET || 'test-secret',
    });
  }

  initialized = true;
  return payload;
};

export default payload;
