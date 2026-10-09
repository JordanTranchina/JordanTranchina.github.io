// Streams a Deezer 30-second preview from our own origin, so the page can
// decode it with the Web Audio API and play exact 0.1 s clips.
export default async function handler(req, res) {
  let u;
  try { u = new URL(String(req.query.u || '')); } catch { return res.status(400).end(); }
  if (u.protocol !== 'https:' || !/(^|\.)dzcdn\.net$/.test(u.hostname)) return res.status(400).end();
  try {
    const r = await fetch(u);
    if (!r.ok) return res.status(502).end();
    const buf = Buffer.from(await r.arrayBuffer());
    res.setHeader('Content-Type', r.headers.get('content-type') || 'audio/mpeg');
    res.setHeader('Cache-Control', 'public, max-age=3600');
    return res.status(200).send(buf);
  } catch {
    return res.status(502).end();
  }
}
