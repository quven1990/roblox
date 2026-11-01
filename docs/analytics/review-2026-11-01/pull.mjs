import {readFileSync,writeFileSync} from 'node:fs';
import {createSign} from 'node:crypto';
const env=Object.fromEntries(readFileSync('.env.local','utf8').split(/\r?\n/).filter(x=>x.trim()&&!x.trim().startsWith('#')&&x.includes('=')).map(x=>{const i=x.indexOf('=');return[x.slice(0,i).trim(),x.slice(i+1).trim().replace(/^['"]|['"]$/g,'')]}));
const sa=JSON.parse(readFileSync(env.GOOGLE_APPLICATION_CREDENTIALS,'utf8'));
const enc=x=>Buffer.from(JSON.stringify(x)).toString('base64url');const now=Math.floor(Date.now()/1000);
const unsigned=enc({alg:'RS256',typ:'JWT'})+'.'+enc({iss:sa.client_email,scope:'https://www.googleapis.com/auth/webmasters.readonly',aud:'https://oauth2.googleapis.com/token',iat:now,exp:now+3600});
const sign=createSign('RSA-SHA256');sign.update(unsigned);const jwt=unsigned+'.'+sign.sign(sa.private_key,'base64url');
const auth=await fetch('https://oauth2.googleapis.com/token',{method:'POST',body:new URLSearchParams({grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',assertion:jwt})});const token=await auth.json();if(!token.access_token)throw Error('Google authentication failed: '+auth.status);
const site=env.GSC_SITE_URL;const endpoint='https://searchconsole.googleapis.com/webmasters/v3/sites/'+encodeURIComponent(site)+'/searchAnalytics/query';
async function query(start,end,dimensions=[],filters){const request={startDate:start,endDate:end,dimensions,rowLimit:25000,dataState:'final',type:'web',...(filters?{dimensionFilterGroups:[{filters}]}:{})};const r=await fetch(endpoint,{method:'POST',headers:{Authorization:'Bearer '+token.access_token,'Content-Type':'application/json'},body:JSON.stringify(request)});if(!r.ok)throw Error('GSC query failed '+r.status);return{request,...await r.json()};}
const daily=await query('2026-10-01','2026-10-31',['date']);const last=daily.rows?.map(r=>r.keys[0]).sort().at(-1);if(!last)throw Error('No final GSC daily data');
const ago=n=>new Date(Date.parse(last+'T12:00:00Z')-n*86400000).toISOString().slice(0,10);
const jobs={last7:[ago(6),last,[]],prior7:[ago(13),ago(7),[]],last7_pages:[ago(6),last,['page']],prior7_pages:[ago(13),ago(7),['page']],last28_queries:[ago(27),last,['query']],last28_query_pages:[ago(27),last,['query','page']],last7_query_pages:[ago(6),last,['query','page']],chop_daily:['2026-10-25',last,['date'],[{dimension:'page',operator:'contains',expression:'/chop-a-forest/'}]]};
const result={site,capturedAt:new Date().toISOString(),latestFinalDate:last,daily};
await Promise.all(Object.entries(jobs).map(async([name,args])=>{result[name]=await query(...args);console.log(name,result[name].rows?.length??0,'rows')}));
writeFileSync('docs/analytics/review-2026-11-01/gsc.json',JSON.stringify(result,null,2));
console.log(JSON.stringify({site,last,last7:result.last7.rows,prior7:result.prior7.rows,pages:result.last7_pages.rows},null,2));
