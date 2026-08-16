import { SITE_CLARITY_ID } from "@/lib/site";

export function MicrosoftClarity() {
  if (!SITE_CLARITY_ID) {
    return null;
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){
var id='${SITE_CLARITY_ID}';
function boot(){
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", id);
}
if ('requestIdleCallback' in window) requestIdleCallback(boot,{timeout:2500});
else if (document.readyState==='complete') boot();
else window.addEventListener('load',boot);
})();`,
      }}
    />
  );
}
