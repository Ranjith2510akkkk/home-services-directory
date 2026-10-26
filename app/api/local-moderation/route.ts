import {z} from 'zod';
import {allowLocalMutation} from '@/lib/local-access';
import {moderateSubmission} from '@/lib/store';
const schema=z.object({id:z.uuid(),status:z.enum(['approved','rejected'])});
export async function POST(request:Request){
  if(!allowLocalMutation(request))return new Response('Local development only',{status:403});
  const form=await request.formData();const p=schema.safeParse(Object.fromEntries(form));
  if(!p.success)return new Response('Invalid moderation request',{status:400});
  if(!moderateSubmission(p.data.id,p.data.status))return new Response('Submission not found',{status:404});
  return Response.redirect(new URL('/local-admin',`http://${request.headers.get('host')}`),303);
}
