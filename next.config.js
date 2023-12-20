/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
};

const withPwa = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
});

module.exports = withPwa(nextConfig);
