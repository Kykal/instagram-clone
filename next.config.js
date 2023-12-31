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
				pathname: '/img/avatar-gen**.jpg',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
				port: '',
				pathname: '/photo-**',
			},
			{
				protocol: 'https',
				hostname: 'dummyimage.com',
				port: '',
				pathname: '/**/**/**.png',
			},
			{
				protocol: 'https',
				hostname: 'cloudflare-ipfs.com',
				port: '',
				pathname: '/ipfs/**/avatar/**.jpg',
			},
			{
				protocol: 'https',
				hostname: 'loremflickr.com',
				port: '',
				pathname: '/**/**/**',
			},
		],
	},
}

module.exports = nextConfig
