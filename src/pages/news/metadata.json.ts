import { Metadata } from './index.astro';

export async function GET() {
  return new Response(JSON.stringify(Metadata));
}
