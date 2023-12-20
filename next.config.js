import pwa from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
};

const withPwa = pwa({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPwa(nextConfig);
