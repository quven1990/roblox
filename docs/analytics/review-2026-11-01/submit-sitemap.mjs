import {readFileSync,writeFileSync} from 'node:fs';
import {createSign} from 'node:crypto';
const env=Object.fromEntries(readFileSync('.env.local','utf8').split(/\r?\n/).filter(x=>x.trim()&&!x.trim().startsWith('#')&&x.includes('=')).map(x=>{const i=x.indexOf('=');return[x.slice(0,i).trim(),x.slice(i+1).trim().replace(/^['"]|['"]$/g,'')]}));
const sa=JSON.parse(readFileSync(env.GOOGLE_APPLICATION_CREDENTIALS,'utf8'));
const enc=x=>Buffer.from(JSON.stringify(x)).toString('base64url');const now=Math.floor(Date.now()/1000);
const unsigned=enc({alg:'RS256',typ:'JWT'})+'.'+enc({iss:sa.client_email,scope:'https://www.googleapis.com/auth/webmasters',aud:'https://oauth2.googleapis.com/token',iat:now,exp:now+3600});
const sign=createSign('RSA-SHA256');sign.update(unsigned);const jwt=unsigned+'.'+sign.sign(sa.private_key,'base64url');
const auth=await fetch('https://oauth2.googleapis.com/token',{method:'POST',body:new URLSearchParams({grant_type:'urn:ietf:params:oauth:grant-type:jwt-bearer',assertion:jwt})});const token=await auth.json();if(!token.access_token)throw Error('Google authentication failed: '+auth.status);
const site=env.GSC_SITE_URL;const endpoint='https://searchconsole.googleapis.com/webmasters/v3/sites/'+encodeURIComponent(site)+'/searchAnalytics/query';
async function query(start,end,dimensions=[],filters){const request={startDate:start,endDate:end,dimensions,rowLimit:25000,dataState:'final',type:'web',...(filters?{dimensionFilterGroups:[{filters}]}:{})};const r=await fetch(endpoint,{method:'POST',headers:{Authorization:'Bearer '+token.access_token,'Content-Type':'application/json'},body:JSON.stringify(request)});if(!r.ok)throw Error('GSC query failed '+r.status);return{request,...await r.json()};}

if(site !== 'sc-domain:upvane.com')throw Error('Unexpected GSC property');
const sitemap='https://upvane.com/sitemap.xml';
const live=await fetch(sitemap,{cache:'no-store'}); const xml=await live.text();
if(!live.ok || !['gems','pets'].every(p=>xml.includes('https://upvane.com/chop-a-forest/'+p+'/')))throw Error('New sitemap not live; submission skipped');
const url='https://searchconsole.googleapis.com/webmasters/v3/sites/'+encodeURIComponent(site)+'/sitemaps/'+encodeURIComponent(sitemap);
const r=await fetch(url,{method:'PUT',headers:{Authorization:'Bearer '+token.access_token}});
console.log(JSON.stringify({site,sitemap,status:r.status,submittedAt:new Date().toISOString()}));if(!r.ok)throw Error('Sitemap submission failed '+r.status);
const verify=await fetch(url,{headers:{Authorization:'Bearer '+token.access_token}});console.log(JSON.stringify({verificationStatus:verify.status,...await verify.json()}));
