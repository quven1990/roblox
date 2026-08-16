/**
 * Cloudflare Pages cannot delete the *.pages.dev origin.
 * Send production alias traffic to the custom domain; leave preview
 * hosts (*.upvane.pages.dev) and upvane.com alone.
 */
export async function onRequest(context) {
  const host = (context.request.headers.get("host") || "")
    .split(":")[0]
    .toLowerCase();

  if (host === "upvane.pages.dev") {
    const { pathname, search } = new URL(context.request.url);
    return Response.redirect(`https://upvane.com${pathname}${search}`, 301);
  }

  return context.next();
}
