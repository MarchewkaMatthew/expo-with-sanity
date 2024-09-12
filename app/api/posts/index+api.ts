import { createClient } from "@sanity/client";

export async function GET(request: Request) {
  const client = createClient({
    projectId: "pm0xf623",
    dataset: "production",
    useCdn: true,
    apiVersion: "2024-09-12",
    token: process.env.SANITY_API_KEY,
  });

  const posts = await client.fetch('*[_type == "post"]');

  return Response.json({ posts });
}
