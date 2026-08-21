import { getPayload } from 'payload';
import config from '../../payload/payload.config';

let payloadInstance: any = null;
let initError: any = null;

export const initializePayload = async () => {
  if (payloadInstance) {
    return payloadInstance;
  }

  if (initError && process.env.NODE_ENV === 'production') {
    // Don't retry in production if it already failed
    console.warn('Payload CMS not available, using fallback');
    throw initError;
  }

  try {
    payloadInstance = await getPayload({ config });
    console.log('✅ Payload CMS initialized successfully');
    return payloadInstance;
  } catch (error: any) {
    initError = error;

    // In production during build, gracefully fail
    if (process.env.NODE_ENV === 'production') {
      console.warn('⚠️ Payload CMS initialization failed:', error?.message);
      console.warn('App will use fallback data. Database will initialize on first request.');

      // Don't throw - let the app continue with fallbacks
      return null;
    }

    // In development, throw the error for debugging
    console.error('❌ Error initializing Payload CMS:', error);
    throw error;
  }
};

export const getPayloadInstance = () => payloadInstance;

export default payloadInstance;
