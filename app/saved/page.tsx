import SavedList from '@/components/saved-list';
import {allProviders} from '@/lib/store';
export const metadata={title:'Your saved providers'};
export const dynamic='force-dynamic';
export default function Saved(){return <div className="container page-shell"><div className="page-heading"><p className="eyebrow">KEEP YOUR OPTIONS CLOSE</p><h1>Your home-project shortlist.</h1><p>A place to come back to the professionals you want to explore.</p></div><p className="saved-note">Saved on this browser only. Account syncing will be added in a later milestone.</p><SavedList providers={allProviders()}/></div>;}
