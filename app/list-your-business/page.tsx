import type {Metadata} from 'next';
import ListingForm from '@/components/listing-form';
import {allowLocalPreview} from '@/lib/local-access';
export const metadata:Metadata={title:'Create your business profile'};
export const dynamic='force-dynamic';
export default async function ListBusiness(){return <div className="container page-shell narrow-shell"><div className="page-heading"><p className="eyebrow">YOUR EXPERTISE. YOUR NEIGHBORHOOD.</p><h1>A place for your business to grow.</h1><p>Start with the details that help homeowners understand what you do. Basic listings will be free.</p></div><ListingForm enabled={await allowLocalPreview()}/></div>;}
