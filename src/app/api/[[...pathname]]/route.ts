// Payload CMS API route - returns empty collections
// Note: Payload is configured but returns mock data via fallback in lib/payload.ts

const emptyCollection = { docs: [], totalDocs: 0, limit: 100, totalPages: 0, page: 1 };

const apiResponses: Record<string, any> = {
  '/api/profile': emptyCollection,
  '/api/projects': emptyCollection,
  '/api/blog-posts': emptyCollection,
  '/api/social-links': emptyCollection,
  '/api/cta-buttons': emptyCollection,
};

export const GET = async (req: Request) => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // Return empty collection for any API endpoint
  const response = emptyCollection;
  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST = async (req: Request) => {
  return new Response(JSON.stringify({ docs: [] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const PATCH = async (req: Request) => {
  return new Response(JSON.stringify({ docs: [] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const DELETE = async (req: Request) => {
  return new Response(JSON.stringify({ docs: [] }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};
