/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/u/54295964',
			},
			{
				protocol: 'https',
				hostname: 'dummyimage.com',
				port: '',
				pathname: '/**x**/**/**',
			}
		],
	},
};

module.exports = nextConfig
