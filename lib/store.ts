import 'server-only';
import { DatabaseSync } from 'node:sqlite';
import { mkdirSync } from 'node:fs';
import path from 'node:path';
import { randomUUID } from 'node:crypto';
import { listings } from './directory.mjs';
import type { Provider } from './types';

type Submission = { id:string; name:string; email:string; service:string; city:string; description:string; status:string; created_at:string };
let db: DatabaseSync | undefined;
function database() {
  // Local development storage is intentionally unavailable in hosted environments.
  if (process.env.VERCEL || process.env.CF_PAGES || process.env.NODE_ENV === 'production') throw new Error('Local preview storage is disabled in production. Connect Supabase before deployment.');
  if (!db) {
    mkdirSync(path.join(process.cwd(),'.local'),{recursive:true});
    db=new DatabaseSync(path.join(process.cwd(),'.local','directory.sqlite'));
    db.exec(`CREATE TABLE IF NOT EXISTS submissions (
      id TEXT PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL, service TEXT NOT NULL,
      city TEXT NOT NULL, description TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'pending',
      created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
    );`);
  }
  return db;
}
export function localStorageAvailable() { return process.env.NODE_ENV !== 'production' && !process.env.VERCEL && !process.env.CF_PAGES; }
export function allProviders(): Provider[] {
  if (!localStorageAvailable()) return listings;
  const approved=database().prepare("SELECT id,name,service,city,description FROM submissions WHERE status='approved'").all() as unknown as Omit<Submission,'email'|'status'|'created_at'>[];
  return [...listings,...approved.map(p => ({...p,slug:`local-${p.id}`,specialties:[],emergency:false,initials:p.name.split(' ').slice(0,2).map(x=>x[0]).join('').toUpperCase(),tone:'blue'}))];
}
export function getSubmissions(): Submission[] { return database().prepare('SELECT * FROM submissions ORDER BY created_at DESC').all() as unknown as Submission[]; }
export function createSubmission(input: {name:string;email:string;service:string;city:string;description:string}) {
  const id=randomUUID();
  database().prepare('INSERT INTO submissions (id,name,email,service,city,description) VALUES (?,?,?,?,?,?)').run(id,input.name,input.email,input.service,input.city,input.description);
  return id;
}
export function moderateSubmission(id:string,status:'approved'|'rejected') {
  const r=database().prepare('UPDATE submissions SET status=? WHERE id=?').run(status,id);
  return r.changes>0;
}
