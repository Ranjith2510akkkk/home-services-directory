import Link from 'next/link';
export default function NotFound(){return <div className="container page-shell"><div className="empty-state"><p className="eyebrow">404</p><h1>This page isn’t on the map.</h1><p>The profile or guide may not exist. Start with the directory to find what you need.</p><Link className="button" href="/explore">Back to the directory</Link></div></div>;}
