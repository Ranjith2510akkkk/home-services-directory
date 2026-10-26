'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import type {Provider} from '@/lib/types';
import ProviderCard from './provider-card';
import {SAVED_KEY} from './save-button';
export default function SavedList({providers}:{providers:Provider[]}){const[ids,setIds]=useState<string[]>([]),[ready,setReady]=useState(false);useEffect(()=>{const read=()=>{try{setIds(JSON.parse(localStorage.getItem(SAVED_KEY)||'[]'));}catch{}setReady(true);};read();window.addEventListener('saved-change',read);window.addEventListener('storage',read);return()=>{window.removeEventListener('saved-change',read);window.removeEventListener('storage',read);};},[]);const saved=providers.filter(p=>ids.includes(p.slug));return !ready?<p className="muted">Loading your shortlist…</p>:saved.length?<div className="provider-grid">{saved.map(p=><ProviderCard key={p.id} provider={p}/>)}</div>:<div className="empty-state"><h2>Your shortlist starts here.</h2><p>Tap the bookmark on a provider to save it for later.</p><Link href="/explore" className="button">Explore professionals</Link></div>;}
