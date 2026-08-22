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
    console.log('📡 Initializing Payload CMS...');
    console.log('🔗 Database URL configured:', !!process.env.DATABASE_URL);
    console.log('🔐 Payload Secret configured:', !!process.env.PAYLOAD_SECRET);
    console.log('🌐 Payload URL:', process.env.NEXT_PUBLIC_PAYLOAD_URL);

    payloadInstance = await getPayload({ config });

    console.log('✅ Payload CMS initialized successfully');
    console.log('📊 Database connection established');
    return payloadInstance;
  } catch (error: any) {
    initError = error;

    if (process.env.NODE_ENV === 'production') {
      console.warn('⚠️ Payload CMS initialization failed during build');
      console.warn('Error details:', error?.message || error?.code || 'Unknown error');
      if (error?.cause) {
        console.warn('Cause:', error.cause.message);
      }
      console.warn('ℹ️ App will use fallback data. Database will initialize when server runs.');

      return null;
    }

    // In development, provide detailed error info
    console.error('❌ Error initializing Payload CMS:', error?.message);
    console.error('Full error:', error);
    throw error;
  }
};

export const getPayloadInstance = () => payloadInstance;

export default payloadInstance;
