// Small proxy to the public Deezer API (it has no CORS headers).
// Only two read-only calls are allowed.
export default async function handler(req, res) {
  const { type, q, id } = req.query;
  let url;
  if (type === 'artists' && typeof q === 'string' && q.trim()) {
    url = `https://api.deezer.com/search/artist?limit=8&q=${encodeURIComponent(q.trim().slice(0, 100))}`;
  } else if (type === 'top' && /^\d+$/.test(String(id || ''))) {
    url = `https://api.deezer.com/artist/${id}/top?limit=100`;
  } else {
    return res.status(400).json({ error: 'bad request' });
  }
  try {
    const r = await fetch(url);
    const data = await r.json();
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400');
    return res.status(r.ok ? 200 : 502).json(data);
  } catch (e) {
    return res.status(502).json({ error: 'upstream failed' });
  }
}
