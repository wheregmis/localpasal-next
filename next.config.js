module.exports = {
  swcMinify: true,
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  images: {
    domains: ["links.papareact.com", "firebasestorage.googleapis.com"],
  },
};
