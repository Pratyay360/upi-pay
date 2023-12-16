const withPWA = require('next-pwa');
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
          {hostname: 'raw.githubusercontent.com'},
          {hostname: 'github.com'},
          {hostname: 'wekwttnnowtwqzntesch.supabase.co'}, 
          {hostname: 'cdn.hashnode.com'},
          {hostname: 'private-user-images.githubusercontent.com'},
        ],
  },
}

module.exports = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);;