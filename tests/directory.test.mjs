import test from 'node:test';
import assert from 'node:assert/strict';
import {listings,filterListings,services,cities} from '../lib/directory.mjs';
test('service and city filters intersect',()=>{const result=filterListings(listings,{service:'Plumbing',city:'Houston'});assert.equal(result.length,1);assert.equal(result[0].slug,'bayou-pipe-and-drain');});
test('specialty search is case insensitive and trims spaces',()=>{const result=filterListings(listings,{q:'  WATER HEATERS '});assert.equal(result.length,2);assert.ok(result.every(p=>p.specialties.includes('Water heaters')));});
test('emergency-only filter excludes non-emergency profiles',()=>{const result=filterListings(listings,{emergency:true});assert.equal(result.length,5);assert.ok(result.every(p=>p.emergency));});
test('unknown query produces a real empty result',()=>{assert.equal(filterListings(listings,{q:'unmatched test value'}).length,0);});
test('seed data has unique URLs and supported markets',()=>{assert.equal(new Set(listings.map(p=>p.slug)).size,listings.length);assert.ok(listings.every(p=>services.includes(p.service)&&cities.includes(p.city)));});
