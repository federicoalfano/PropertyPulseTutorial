/** @type {import('next').NextConfig} */
const nextConfig = {

    images:
    {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ls3.googleusercontent.com',
                pathname: '**'
            }
        ]
    }
};

export default nextConfig;
