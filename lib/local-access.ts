import { headers } from 'next/headers';
export async function allowLocalPreview() {
  const h=await headers();
  const host=h.get('host') || '';
  return process.env.NODE_ENV !== 'production' && !process.env.VERCEL && /^(127\.0\.0\.1|localhost)(:\d+)?$/.test(host);
}
export function allowLocalMutation(request: Request) {
  const host=request.headers.get('host') || '';
  const origin=request.headers.get('origin');
  if(process.env.NODE_ENV === 'production' || process.env.VERCEL || !/^(127\.0\.0\.1|localhost)(:\d+)?$/.test(host) || !origin)return false;
  try { const source=new URL(origin); return source.protocol==='http:' && source.host===host; } catch { return false; }
}
