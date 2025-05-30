import { metadata } from './index.astro';

export async function GET() {
  return new Response(JSON.stringify(metadata));
}
