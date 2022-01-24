export const encodeURL = (url) => {
  return encodeURIComponent(url.replace(/\s+/g, '-').replace(/\./g, '').toLowerCase())
}