export function GET(request: Request) {
  return Response.json({ hello: process.env.SANITY_API_KEY });
}
