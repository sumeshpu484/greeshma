import { payloadHandler } from '@payloadcms/next/handlers';
import config from '../../../../payload/payload.config';

const handle = payloadHandler({ config });

export const GET = handle;
export const POST = handle;
export const PATCH = handle;
export const DELETE = handle;
