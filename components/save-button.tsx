'use client';
import { useEffect,useState } from 'react';
import { Bookmark } from 'lucide-react';
export const SAVED_KEY='hsf-saved-providers';
export default function SaveButton({slug}:{slug:string}) {
  const [saved,setSaved]=useState(false);
  useEffect(()=>{try {setSaved(JSON.parse(localStorage.getItem(SAVED_KEY)||'[]').includes(slug));}catch{}},[slug]);
  function toggle(){try {const list=JSON.parse(localStorage.getItem(SAVED_KEY)||'[]') as string[];localStorage.setItem(SAVED_KEY,JSON.stringify(saved?list.filter(x=>x!==slug):[...new Set([...list,slug])]));setSaved(!saved);window.dispatchEvent(new Event('saved-change'));}catch{}}
  return <button type="button" className={`save-button ${saved?'is-saved':''}`} aria-label={`${saved?'Unsave':'Save'} provider`} aria-pressed={saved} onClick={toggle}><Bookmark size={19} fill={saved?'currentColor':'none'}/></button>;
}
