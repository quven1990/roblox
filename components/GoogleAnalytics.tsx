import { SITE_GA4_ID } from "@/lib/site";

export function GoogleAnalytics() {
  if (!SITE_GA4_ID) {
    return null;
  }

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE_GA4_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${SITE_GA4_ID}');`,
        }}
      />
    </>
  );
}
