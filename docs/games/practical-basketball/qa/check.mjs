import { chromium } from '/Users/xuehao/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.mjs';
import fs from 'node:fs';
const base=process.env.QA_BASE??'http://127.0.0.1:4186';
const production=base.startsWith('https://');
const dir='docs/games/practical-basketball/qa';
const browser=await chromium.launch({headless:true,executablePath:'/Users/xuehao/Library/Caches/ms-playwright/chromium_headless_shell-1243/chrome-headless-shell-mac-arm64/chrome-headless-shell'});
const ctx=await browser.newContext({reducedMotion:'reduce'});
await ctx.route('**/*',route=>{const u=new URL(route.request().url());return u.origin===new URL(base).origin?route.continue():route.abort();});
const paths=['/','/practical-basketball/','/practical-basketball/controls/','/practical-basketball/shooting-and-dunking/',...(production?[]:['/plus-1-spider-arm/','/steal-an-egg/pets/','/chop-a-forest/tools/'])];
const widths=production?[1440,390]:[1440,1024,768,390,360,320];
const errors=[];const rows=[];const hrefs=new Set();
const page=await ctx.newPage();page.on('pageerror',e=>errors.push(String(e)));
for(const width of widths){await page.setViewportSize({width,height:900});for(const path of paths){
const response=await page.goto(base+path,{waitUntil:'networkidle'});await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async image=>{image.loading='eager';try{await image.decode()}catch{}}));});
const metrics=await page.evaluate(()=>({title:document.title,h1:document.querySelectorAll('h1').length,canonical:document.querySelector('link[rel="canonical"]')?.href,overflow:document.documentElement.scrollWidth>innerWidth,badImages:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),hasNotice:document.body.innerText.includes('not affiliated with'),internal:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')).filter(h=>h?.startsWith('/')),answerY:document.querySelector('.pb-answer')?.getBoundingClientRect().top,artY:document.querySelector('.pb-art')?.getBoundingClientRect().top}));
metrics.internal.forEach(h=>hrefs.add(h));delete metrics.internal;
const row={path,width,status:response.status(),...metrics};rows.push(row);
if(row.status!==200||row.h1!==1||row.canonical!=='https://upvane.com'+path||row.overflow||row.badImages.length||!row.hasNotice)throw Error('Layout failed '+JSON.stringify(row));
if(width<=700&&path.startsWith('/practical-basketball/')&&row.answerY>=row.artY)throw Error('Answer below art');
if([1440,390].includes(width)&&paths.indexOf(path)<4)await page.screenshot({path:`${dir}/${production?'live-':''}${path==='/'?'home':path.split('/').filter(Boolean).at(-1)}-${width}.png`,fullPage:true});
}}
await page.setViewportSize({width:390,height:844});await page.goto(base+'/');await page.getByRole('link',{name:'Explore Practical Basketball',exact:true}).click();await page.getByRole('navigation',{name:'Practical Basketball',exact:true}).getByRole('link',{name:'Controls',exact:true}).click();
await page.getByRole('button',{name:'PlayStation',exact:true}).click();if(await page.getByRole('columnheader',{name:'PlayStation',exact:true}).isVisible()!==true||await page.getByRole('columnheader',{name:'PC',exact:true}).isVisible())throw Error('Device selection failed');
await page.getByRole('button',{name:'Compare all',exact:true}).click();for(const name of ['PC','Xbox','PlayStation'])if(!await page.getByRole('columnheader',{name,exact:true}).isVisible())throw Error('Compare missing '+name);
const region=page.getByRole('region',{name:'Reported shooting and finishing controls; scroll horizontally to compare platforms',exact:true});await region.focus();await region.press('ArrowRight');await page.waitForTimeout(100);if(await region.evaluate(el=>el.scrollLeft)<=0)throw Error('Keyboard table scroll failed');
await page.locator('#faq summary').first().click();if(!await page.locator('#faq details').first().getAttribute('open').then(v=>v!==null))throw Error('FAQ failed');
await page.getByRole('navigation',{name:'Practical Basketball',exact:true}).getByRole('link',{name:'Shooting & dunks',exact:true}).click();for(const issue of ['fake','layup','miss','dunk']){await page.getByLabel('What happens on your attempt?',{exact:true}).selectOption(issue);const title=await page.locator('.pb-diagnosis-result h3').innerText();if(!title)throw Error('Diagnosis missing');}
await page.getByRole('button',{name:/Games/}).click();await page.getByRole('menuitem').count().catch(()=>0);
const menu=page.locator('.games-menu-panel');if(!await menu.isVisible())throw Error('Games menu failed');await menu.getByRole('menuitem',{name:'Steal An Egg',exact:true}).click();await page.getByRole('link',{name:'Privacy Policy',exact:true}).click();await page.waitForURL('**/privacy/');if(!page.url().includes('/privacy'))throw Error('Legal link failed');
const links=[];for(const href of hrefs){const url=new URL(href,base);const r=await ctx.request.get(url.href);if(!r.ok())throw Error('Bad internal link '+href+' '+r.status());if(url.hash){const html=await r.text();if(!html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`))throw Error('Missing anchor '+href);}links.push({href,status:r.status()});}
const sitemap=await (await ctx.request.get(base+'/sitemap.xml')).text();const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);if(new Set(urls).size!==35)throw Error('Unexpected sitemap count '+urls.length);for(const path of paths.slice(1,4))if(!urls.includes('https://upvane.com'+path))throw Error('Missing sitemap '+path);
const robots=await(await ctx.request.get(base+'/robots.txt')).text();if(!robots.includes('https://upvane.com/sitemap.xml'))throw Error('Robots sitemap missing');
for(const path of paths.slice(1,4)){const html=await(await ctx.request.get(base+path)).text();if(!html.includes('"@type":"Article"')||!html.includes('"@type":"BreadcrumbList"')||!html.includes('2026-11-06')||html.includes('<iframe')||/name="robots"[^>]+noindex/.test(html))throw Error('Metadata/schema failed '+path);if(html.includes('124235162470177'))throw Error('Wrong experience link');}
if(errors.length)throw Error('Client exceptions '+JSON.stringify(errors));
fs.writeFileSync(`${dir}/${production?'production':'results'}.json`,JSON.stringify({base,capturedAt:new Date().toISOString(),layouts:rows,links,clientErrors:errors,sitemapUrls:urls.length,interactions:'PASS: homepage→guide→controls; device toggle and compare; keyboard table scroll; FAQ; four diagnosis states; games menu; legacy game; privacy',analytics:'External requests blocked; no QA analytics sent'},null,2));
console.log(JSON.stringify({base,layouts:rows.length,internalLinks:links.length,sitemap:urls.length,errors,interaction:'PASS'}));await browser.close();
