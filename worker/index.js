// Permanent (301) redirects so search engines consolidate on one URL:
//   http -> https, www.zinnote.kr -> zinnote.kr, /slug/ -> /slug
// Everything else is served from the static assets in dist/.
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    let changed = false;
    if (url.hostname === 'www.zinnote.kr') {
      url.hostname = 'zinnote.kr';
      changed = true;
    }
    if (url.protocol === 'http:' && url.hostname.endsWith('zinnote.kr')) {
      url.protocol = 'https:';
      changed = true;
    }
    if (url.pathname.length > 1 && url.pathname.endsWith('/')) {
      url.pathname = url.pathname.replace(/\/+$/, '') || '/';
      changed = true;
    }
    if (changed) return Response.redirect(url.toString(), 301);
    return env.ASSETS.fetch(request);
  },
};
