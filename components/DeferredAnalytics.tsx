import { SITE_CLARITY_ID, SITE_GA4_ID } from "@/lib/site";

export function DeferredAnalytics() {
  if (!SITE_GA4_ID && !SITE_CLARITY_ID) {
    return null;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){
var done=false;
var ga=${JSON.stringify(SITE_GA4_ID)};
var clarityId=${JSON.stringify(SITE_CLARITY_ID)};
function boot(){
  if(done) return;
  done=true;
  ['pointerdown','keydown','touchstart','scroll'].forEach(function(t){
    window.removeEventListener(t, boot, true);
  });
  if(ga){
    window.dataLayer=window.dataLayer||[];
    function gtag(){dataLayer.push(arguments);}
    window.gtag=gtag;
    gtag('js', new Date());
    gtag('config', ga, {transport_type:'beacon'});
    var gs=document.createElement('script');
    gs.async=true;
    gs.src='https://www.googletagmanager.com/gtag/js?id='+ga;
    document.head.appendChild(gs);
  }
  if(clarityId){
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, 'clarity', 'script', clarityId);
  }
}
['pointerdown','keydown','touchstart','scroll'].forEach(function(t){
  window.addEventListener(t, boot, {capture:true, passive:true});
});
setTimeout(boot, 30000);
})();`,
      }}
    />
  );
}
