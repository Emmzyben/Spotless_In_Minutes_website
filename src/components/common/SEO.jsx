import { useEffect } from 'react';

export default function SEO({
  title = 'Spotless in Minutes – Dependable Home & Business services',
  description = 'A dependable partner for residential projects, logistics coordination, and oil and gas tool procurement, with clear communication from enquiry to delivery.',
  canonical = 'https://www.spotlessinminutes.com/',
  image = '/images/logo.png',
  type = 'website'
}) {
  useEffect(() => {
    // 1. Update Document Title
    document.title = title;

    // Helper to set or create meta tag
    const setMeta = (attr, name, content) => {
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMeta('name', 'description', description);

    // 3. Open Graph Tags
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:image', window.location.origin + image);
    setMeta('property', 'og:url', window.location.href);

    // 4. Twitter Tags
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', window.location.origin + image);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', canonical);
  }, [title, description, canonical, image, type]);

  return null;
}
