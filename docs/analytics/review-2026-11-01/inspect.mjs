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

const output={};
for(const path of ['/chop-a-forest/','/chop-a-forest/zones/','/chop-a-forest/tools/','/steal-an-egg/pets/']){
 const r=await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect',{method:'POST',headers:{Authorization:'Bearer '+token.access_token,'Content-Type':'application/json'},body:JSON.stringify({inspectionUrl:'https://upvane.com'+path,siteUrl:site,languageCode:'en-US'})});
 const d=await r.json();output[path]={status:r.status,...d};const x=d.inspectionResult?.indexStatusResult;console.log(JSON.stringify({path,status:r.status,index:x}));
}
const r=await fetch('https://searchconsole.googleapis.com/webmasters/v3/sites/'+encodeURIComponent(site)+'/sitemaps',{headers:{Authorization:'Bearer '+token.access_token}});output.sitemaps={status:r.status,...await r.json()};writeFileSync('docs/analytics/review-2026-11-01/indexing.json',JSON.stringify(output,null,2));
