import { getPayload } from 'payload';
import config from '../../payload/payload.config';

let payloadInstance: any = null;

export const initializePayload = async () => {
  if (payloadInstance) {
    return payloadInstance;
  }

  try {
    payloadInstance = await getPayload({ config });
    console.log('✅ Payload CMS initialized');
    return payloadInstance;
  } catch (error) {
    console.error('❌ Error initializing Payload CMS:', error);
    throw error;
  }
};

export const getPayloadInstance = () => payloadInstance;

export default payloadInstance;
