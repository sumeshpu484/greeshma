// Payload CMS API endpoints - return empty collections
// Uses mock data fallback in lib/payload.ts during build/initial load

const HEADERS = {
  'Content-Type': 'application/json',
  'Cache-Control': 'no-cache, no-store, must-revalidate',
};

const emptyResponse = {
  docs: [],
  totalDocs: 0,
  limit: 100,
  totalPages: 0,
  page: 1,
  pagingCounter: 1,
  hasPrevPage: false,
  hasNextPage: false,
  prevPage: null,
  nextPage: null,
};

export async function GET(request: Request) {
  try {
    return new Response(JSON.stringify(emptyResponse), {
      status: 200,
      headers: HEADERS,
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ docs: [], error: 'Internal Server Error' }), {
      status: 500,
      headers: HEADERS,
    });
  }
}

export async function POST(request: Request) {
  try {
    return new Response(JSON.stringify(emptyResponse), {
      status: 200,
      headers: HEADERS,
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ docs: [], error: 'Internal Server Error' }), {
      status: 500,
      headers: HEADERS,
    });
  }
}

export async function PATCH(request: Request) {
  try {
    return new Response(JSON.stringify(emptyResponse), {
      status: 200,
      headers: HEADERS,
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ docs: [], error: 'Internal Server Error' }), {
      status: 500,
      headers: HEADERS,
    });
  }
}

export async function DELETE(request: Request) {
  try {
    return new Response(JSON.stringify(emptyResponse), {
      status: 200,
      headers: HEADERS,
    });
  } catch (error) {
    console.error('API error:', error);
    return new Response(JSON.stringify({ docs: [], error: 'Internal Server Error' }), {
      status: 500,
      headers: HEADERS,
    });
  }
}
