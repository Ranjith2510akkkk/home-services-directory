'use client';
import {useEffect,useRef,useState} from 'react';
import {ArrowUpRight,X,Info} from 'lucide-react';
export default function ContactPreview(){
  const[open,setOpen]=useState(false);
  const dialog=useRef<HTMLElement>(null),trigger=useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    if(!open)return;
    const previous=document.body.style.overflow;document.body.style.overflow='hidden';
    const buttons=()=>Array.from(dialog.current?.querySelectorAll<HTMLElement>('button, a[href], input, select, textarea, [tabindex="0"]') || []);
    buttons()[0]?.focus();
    function keyboard(e:KeyboardEvent){
      if(e.key==='Escape'){e.preventDefault();setOpen(false);}
      if(e.key==='Tab'){
        const items=buttons(),first=items[0],last=items[items.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}
      }
    }
    document.addEventListener('keydown',keyboard);
    return()=>{document.body.style.overflow=previous;document.removeEventListener('keydown',keyboard);trigger.current?.focus();};
  },[open]);
  return <><button ref={trigger} className="button" onClick={()=>setOpen(true)}>Request a quote <ArrowUpRight size={17}/></button>{open&&<div className="dialog-backdrop" onClick={()=>setOpen(false)}><section ref={dialog} role="dialog" aria-modal="true" aria-labelledby="contact-title" aria-describedby="contact-description" className="contact-dialog" onClick={e=>e.stopPropagation()}><button className="dialog-close" aria-label="Close" onClick={()=>setOpen(false)}><X/></button><span className="category-icon blue"><Info/></span><h2 id="contact-title">You’re exploring a demo profile.</h2><p id="contact-description">This provider is fictional. Quote requests will be available after real businesses, accounts, and secure enquiry delivery are connected.</p><p>No message has been sent and no contact information has been collected.</p><button className="button" onClick={()=>setOpen(false)}>Continue exploring</button></section></div>}</>;
}
