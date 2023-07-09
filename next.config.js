/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'avatars.githubusercontent.com',
				port: '',
				pathname: '/u/**',
			},
			{
				protocol: 'https',
				hostname: 'this-person-does-not-exist.com',
				port: '',
				pathname: '/img/**.jpg',
			},
			{
				protocol: 'https',
				hostname: 'pixabay.com',
				port: '',
				pathname: '/get/**.jpg',
			},
		],
	},
}

module.exports = nextConfig
