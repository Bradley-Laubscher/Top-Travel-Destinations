/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'cdn.kimkim.com',
      'www.thespiritsbusiness.com',
      'www.traveldudes.com',
      'www.tripsavvy.com',
      'lp-cms-production.imgix.net',
      'cdn.kiwicollection.com',
      'p-airnz.com',
      'lh3.googleusercontent.com',
      'media.tacdn.com',
      'specials-images.forbesimg.com',     
    ]
  }
}

module.exports = nextConfig
