import Link from 'next/link';
import { ArrowUpRight,MapPin,Zap } from 'lucide-react';
import type {Provider} from '@/lib/types';
import {states} from '@/lib/directory.mjs';
import SaveButton from './save-button';
export default function ProviderCard({provider:p}:{provider:Provider}) {
  return <article className="provider-card"><div className="card-top"><span className={`company-avatar ${p.tone}`}>{p.initials}</span><SaveButton slug={p.slug}/></div><div className="card-badges"><span className="eyebrow">{p.service}</span><span className="demo-tag">Demo profile</span></div><h3><Link href={`/pros/${p.slug}`}>{p.name}</Link></h3><p className="location-line"><MapPin size={14}/>{p.city}, {states[p.city as keyof typeof states] || 'USA'}</p><div className="specialties">{p.specialties.length?p.specialties.slice(0,3).map(s=><span key={s}>{s}</span>):<span>New development listing</span>}</div><div className="card-bottom"><span>{p.emergency?<><Zap size={13}/> Emergency specialty</>:<>License not checked</>}</span><Link href={`/pros/${p.slug}`} aria-label={`View ${p.name}`}>View profile <ArrowUpRight size={16}/></Link></div></article>;
}
