import {z} from 'zod';
import {services,cities} from '@/lib/directory.mjs';
import {createSubmission} from '@/lib/store';
import {allowLocalMutation} from '@/lib/local-access';
const schema=z.object({name:z.string().trim().min(2).max(100),email:z.email().max(160),service:z.string().refine(s=>services.includes(s)),city:z.string().refine(c=>cities.includes(c)),description:z.string().trim().min(30).max(1500),consent:z.literal('yes')});
let lastSubmission=0;
export async function POST(request:Request){
  if(!allowLocalMutation(request))return Response.json({error:'This endpoint is available only in the local development preview.'},{status:403});
  if(!request.headers.get('content-type')?.includes('application/json'))return Response.json({error:'Expected a JSON request.'},{status:415});
  const raw=await request.text();if(raw.length>12000)return Response.json({error:'Submission is too large.'},{status:413});
  let payload;try{payload=JSON.parse(raw);}catch{return Response.json({error:'Invalid request.'},{status:400});}
  const parsed=schema.safeParse(payload);if(!parsed.success)return Response.json({error:'Please check the name, email, service, city, description length, and development consent.'},{status:400});
  if(Date.now()-lastSubmission<2000)return Response.json({error:'Please wait a moment before sending another test listing.'},{status:429});
  try{const id=createSubmission(parsed.data);lastSubmission=Date.now();return Response.json({id,status:'pending'},{status:201});}catch{return Response.json({error:'Local storage is unavailable. Check the development server.'},{status:503});}
}
