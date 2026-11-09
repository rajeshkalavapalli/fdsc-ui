import { useEffect } from 'react'

const SITE = 'FDSC — Firdaws Distance Study Center'
const DEFAULT_DESCRIPTION =
  'Firdaws Distance Study Center (FDSC), Venkatagiri — guidance and admission support for Open 10th, Open 12th, Intermediate (APOSS & NIOS) and Open Degree programmes.'

const setMeta = (selector, attr, value) => {
  const el = document.querySelector(selector)
  if (el) el.setAttribute(attr, value)
}

/* Sets the browser tab title and the description/share text for each page. */
export default function usePageMeta(title, description = DEFAULT_DESCRIPTION) {
  useEffect(() => {
    const full = title ? `${title} | ${SITE}` : `${SITE}, Venkatagiri`
    document.title = full
    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', full)
    setMeta('meta[property="og:description"]', 'content', description)
  }, [title, description])
}
