import { sitemapBuilder as buildSitemap } from 'react-router-sitemap';t

const paths = ['/', 'login', '/signup', '/story/:id', '/mission', '/search', '/explore', '/feedback', 'get-involved', 'contact', 'donate', 'forgot-password', '/now', '/economy', '/future', '/health', '/tech', '/environment', '/climate-change', '/waste', '/politics', '/cities', '/food', '/biodiversity', '/self', '/energy', '/innovation', '/equality', '/research', '/personal-finance', '/transport', '/science', '/work', '/faq', '/profile', '/profile/:id', '/settings', '/draft/:id', '/privacy-polciy', '/terms-of-use', '/admin'];
const hostname = 'https://novaterra.earth';
const sitemap = buildSitemap(hostname, paths);
