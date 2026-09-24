import {readFile,readdir,stat} from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {branches,services} from './content.mjs';
const root=path.resolve('dist');let links=0;let images=0;const files=[];
async function walk(dir){for(const f of await readdir(dir,{withFileTypes:true})){const p=path.join(dir,f.name);if(f.isDirectory())await walk(p);else if(f.name.endsWith('.html'))files.push(p);}}
await walk(root);
assert.equal(branches.length,new Set(branches.map(b=>b.id)).size,'Branch IDs must be unique');
for(const branch of branches)assert.match(branch.phone,/^0\d{10}$/,'Valid Nigerian branch number');
for(const file of files){
  const html=await readFile(file,'utf8');
  assert.equal((html.match(/<h1[ >]/g)||[]).length,1,file+' should have one h1');
  assert.match(html,/<meta name="description" content="[^"]+"/);
  const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(ids.length,new Set(ids).size,file+' contains duplicate IDs');
  for(const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
    const href=match[1];if(!href.startsWith('/')&&!href.startsWith('#'))continue;
    const url=new URL(href,'http://localhost'+path.relative(root,file).replaceAll('\\','/').replace(/index\.html$/,''));
    let target=href.startsWith('#')?file:path.join(root,decodeURIComponent(url.pathname));
    if((await stat(target)).isDirectory())target=path.join(target,'index.html');
    await stat(target);links++;
    if(url.hash){const content=await readFile(target,'utf8');assert.ok(content.includes(`id="${url.hash.slice(1)}"`),file+' missing anchor '+href);}
  }
  for(const img of html.matchAll(/<img\b[^>]+>/g)){assert.match(img[0],/alt="[^"]*"/);assert.match(img[0],/width="\d+"/);assert.match(img[0],/height="\d+"/);images++;}
  for(const form of html.matchAll(/<form\b[^>]+>/g)){if(form[0].includes('method="post"'))assert.ok(form[0].includes('https://finrelpharmacy.com/?page_id=954'),'Forms must use the existing Finrel endpoint');}
}
assert.equal(services.length,4);
console.log(`PASS: ${files.length} HTML pages, ${links} local links/assets, ${images} labelled images; unique IDs, metadata, branch phones and existing form endpoints.`);
