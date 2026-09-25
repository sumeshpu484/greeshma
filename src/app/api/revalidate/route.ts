import { revalidateTag } from 'next/cache';

export async function POST(req: Request) {
  const secret = req.headers.get('x-revalidate-secret');
  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ error: 'Invalid secret' }, { status: 401 });
  }

  const { tag } = await req.json();
  if (!tag || typeof tag !== 'string') {
    return Response.json({ error: 'Missing tag' }, { status: 400 });
  }

  revalidateTag(tag, { expire: 0 });
  return Response.json({ revalidated: true, tag, now: Date.now() });
}
