import { SITE_GA4_ID } from "@/lib/site";

export function GoogleAnalytics() {
  if (!SITE_GA4_ID) {
    return null;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){
var id='${SITE_GA4_ID}';
function boot(){
  window.dataLayer=window.dataLayer||[];
  function gtag(){dataLayer.push(arguments);}
  window.gtag=gtag;
  gtag('js',new Date());
  gtag('config',id,{transport_type:'beacon'});
  var s=document.createElement('script');
  s.async=true;
  s.src='https://www.googletagmanager.com/gtag/js?id='+id;
  document.head.appendChild(s);
}
if ('requestIdleCallback' in window) requestIdleCallback(boot,{timeout:2500});
else if (document.readyState==='complete') boot();
else window.addEventListener('load',boot);
})();`,
      }}
    />
  );
}
