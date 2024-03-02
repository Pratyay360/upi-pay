module.exports = {
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
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}