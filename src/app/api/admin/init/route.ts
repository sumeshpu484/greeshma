import { initializePayload } from "@/lib/payload-client";

export async function GET(req: Request) {
  try {
    const payload = await initializePayload();

    return Response.json({
      status: "initialized",
      message: "Payload CMS is ready",
      environment: process.env.NODE_ENV,
      databaseConfigured: !!process.env.DATABASE_URL,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Initialization error:", error);
    return Response.json(
      {
        status: "error",
        error: error?.message || "Failed to initialize Payload CMS",
        cause: error?.cause?.message,
      },
      { status: 503 }
    );
  }
}
