/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
};

module.exports = {
    images: {
        domains: ["m.media-amazon.com"],
    },
    env: {
        KEY: process.env.API_KEY,
    },
    serverRuntimeConfig: {
        // Will only be available on the server side
        KEY: process.env.API_KEY,
    },
    publicRuntimeConfig: {
        // Will be available on both server and client
        KEY: process.env.API_KEY,
    },
};
