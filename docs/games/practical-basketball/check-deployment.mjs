import fs from 'node:fs';import {execFileSync} from 'node:child_process';
const target=JSON.parse(fs.readFileSync('/tmp/upvane-pb-cloudflare-target.json','utf8'));
const sha=execFileSync('git',['rev-parse','HEAD'],{encoding:'utf8'}).trim();
const token=fs.readFileSync(target.config,'utf8').match(/^oauth_token\s*=\s*"([^"]+)"/m)?.[1];if(!token)throw Error('Existing Cloudflare session unavailable');let previous='';
for(let attempt=0;attempt<24;attempt++){
 const r=await fetch(`https://api.cloudflare.com/client/v4/accounts/${target.accountId}/pages/projects/upvane/deployments?env=production&per_page=10`,{headers:{Authorization:'Bearer '+token},signal:AbortSignal.timeout(20000)});const d=await r.json();if(!r.ok||!d.success)throw Error('Deployment lookup failed '+r.status);
 const deployment=d.result.find(x=>x.deployment_trigger?.metadata?.commit_hash===sha);const stage=deployment?.latest_stage;const status=JSON.stringify({sha:sha.slice(0,7),deployment:deployment?.id,stage:stage?.name,status:stage?.status,skipped:deployment?.is_skipped});if(status!==previous){console.log(status);previous=status;}
 if(deployment?.is_skipped)throw Error('Production deployment skipped');if(stage?.status==='failure'||stage?.status==='canceled')throw Error('Deployment did not succeed');
 if(stage?.name==='deploy'&&stage.status==='success'){
 const record={capturedAt:new Date().toISOString(),project:'upvane',environment:deployment.environment,id:deployment.id,createdOn:deployment.created_on,modifiedOn:deployment.modified_on,trigger:deployment.deployment_trigger,latestStage:stage,stages:deployment.stages,url:deployment.url};fs.writeFileSync('docs/games/practical-basketball/deployment.json',JSON.stringify(record,null,2));console.log('Production deployment confirmed');process.exit(0);
 }
 await new Promise(resolve=>setTimeout(resolve,15000));
}
throw Error('Deployment not completed within observation window');
