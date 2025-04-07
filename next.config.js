/** 
 * @type {import('next').NextConfig}
 *  */
const nextConfig = {
  output: 'export',
  distDir: 'dist', 
  basePath: process.env.NODE_ENV === 'production' ? '/<portfolio-website>' : '', 
  assetPrefix: process.env.NODE_ENV === 'production' ? '/<portfolio-website>/' : '', 
  images: { 
    unoptimized: true,
  },
};


module.exports = nextConfig;
  // trailingSlash: true,
  //   basePath: '/portfolio-website',
  // assetPrefix: '/portfolio-website',
