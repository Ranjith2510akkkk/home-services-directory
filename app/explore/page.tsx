import type {Metadata} from 'next';
import {Search,SlidersHorizontal,ArrowRight} from 'lucide-react';
import Link from 'next/link';
import {services,cities,filterListings} from '@/lib/directory.mjs';
import {allProviders} from '@/lib/store';
import ProviderCard from '@/components/provider-card';
import type {Provider} from '@/lib/types';
export const metadata:Metadata={title:'Explore home-service professionals'};
export const dynamic='force-dynamic';
export default async function Explore({searchParams}:{searchParams:Promise<Record<string,string|string[]|undefined>>}){
  const params=await searchParams;const val=(key:string)=>typeof params[key]==='string'?params[key] as string:'';
  const city=val('city'),service=val('service'),q=val('q'),emergency=val('emergency')==='1';
  const all:Provider[]=filterListings(allProviders(),{q,city,service,emergency});
  const page=Math.max(1,Math.min(Math.ceil(all.length/6)||1,Number.parseInt(val('page'))||1));const shown=all.slice((page-1)*6,page*6);
  function pageLink(n:number){const s=new URLSearchParams({city,service,q,page:String(n)});if(emergency)s.set('emergency','1');return `/explore?${s}`;}
  return <div className="container page-shell"><div className="breadcrumbs"><Link href="/">Home</Link><span>/</span>Find a professional</div><div className="page-heading"><p className="eyebrow">FIND YOUR NEXT SET OF HELPING HANDS</p><h1>{service||'Home-service professionals'}{city?` in ${city}`:''}</h1><p>Explore specialties and build your shortlist. All profiles in this local preview are demo records.</p></div><div className="explore-layout"><aside><form action="/explore" className="filter-panel"><h2><SlidersHorizontal size={18}/> Refine your search</h2><label>Keyword<div className="text-input-icon"><Search size={16}/><input name="q" defaultValue={q} placeholder="Business or specialty"/></div></label><label>Service<select name="service" defaultValue={service}><option value="">All services</option>{services.map(s=><option key={s}>{s}</option>)}</select></label><label>City<select name="city" defaultValue={city}><option value="">All cities</option>{cities.map(c=><option key={c}>{c}</option>)}</select></label><label className="checkbox-label"><input type="checkbox" name="emergency" value="1" defaultChecked={emergency}/> Emergency specialty</label><button className="button" type="submit">Apply filters <ArrowRight size={16}/></button><Link className="reset-link" href="/explore">Clear all filters</Link><p className="filter-note">Emergency availability is sample profile data, not a live availability check.</p></form></aside><section><div className="results-top"><p><strong>{all.length}</strong> {all.length===1?'profile':'profiles'} to explore</p><span>Sorted by directory order</span></div>{shown.length?<><div className="provider-grid results-grid">{shown.map(p=><ProviderCard key={p.id} provider={p}/>)}</div>{all.length>6&&<nav className="pagination" aria-label="Results pagination">{Array.from({length:Math.ceil(all.length/6)},(_,i)=><Link aria-current={page===i+1?'page':undefined} className={page===i+1?'active':''} key={i} href={pageLink(i+1)}>{i+1}</Link>)}</nav>}</>:<div className="empty-state"><Search size={32}/><h2>No profiles match these filters.</h2><p>Try another city, service, or keyword.</p><Link href="/explore" className="button">Explore all profiles</Link></div>}</section></div></div>;
}
