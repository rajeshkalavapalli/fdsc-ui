const BASE = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

// Posts an enquiry to the public API (fdsc-config, POST /api/enquiries).
// Throws on failure; the error carries `status` and the API's message so the form can show
// it (e.g. a validation or rate-limit message) or fall back to WhatsApp when the API is down.
export async function submitEnquiry(payload) {
  if (!BASE) throw Object.assign(new Error('API not configured'), { status: 0 })
  const res = await fetch(`${BASE}/enquiries`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw Object.assign(new Error(data.message || `Request failed (${res.status})`), { status: res.status })
  return data
}
