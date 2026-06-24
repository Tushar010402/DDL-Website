let DOMPurify;

if (typeof window !== 'undefined') {
  DOMPurify = require('dompurify');
}

const SANITIZE_CONFIG = {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'u', 'a', 'p', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'img', 'table', 'tr', 'td', 'th', 'thead', 'tbody', 'span', 'div', 'blockquote'],
  ALLOWED_ATTR: ['href', 'target', 'rel', 'src', 'alt', 'class', 'width', 'height', 'style']
};

export const sanitizeHTML = (dirty) => {
  if (!dirty) return '';
  // On server, return as-is (Django already escapes on the backend).
  // On client, sanitize with DOMPurify to prevent XSS in the browser.
  if (typeof window === 'undefined' || !DOMPurify) return dirty;
  return DOMPurify.sanitize(dirty, SANITIZE_CONFIG);
};

export const sanitizePlainText = (dirty) => {
  if (!dirty) return '';
  if (typeof window === 'undefined' || !DOMPurify) return dirty;
  return DOMPurify.sanitize(dirty, { ALLOWED_TAGS: [] });
};
