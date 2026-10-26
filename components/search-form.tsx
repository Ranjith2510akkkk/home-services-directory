import { MapPin, Search, ArrowRight } from 'lucide-react';
import { cities,services } from '@/lib/directory.mjs';
export default function SearchForm({city='',service='',compact=false}:{city?:string;service?:string;compact?:boolean}) {
  return <form action="/explore" className={`search-form ${compact?'compact':''}`}>
    <label><Search size={20}/><span><span className="input-caption">WHAT DO YOU NEED?</span><select name="service" defaultValue={service} aria-label="Choose a service"><option value="">All home services</option>{services.map(s=><option key={s}>{s}</option>)}</select></span></label>
    <label><MapPin size={20}/><span><span className="input-caption">WHERE IS YOUR PROJECT?</span><select name="city" defaultValue={city} aria-label="Choose a city"><option value="">Choose your city</option>{cities.map(c=><option key={c}>{c}</option>)}</select></span></label>
    <button className="button" type="submit">Find a professional <ArrowRight size={18}/></button>
  </form>;
}
