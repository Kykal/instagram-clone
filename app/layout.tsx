//Configurations
import sharedMetadata from '@/configuration/sharedMetadata';


//NextJS
import type { Metadata } from 'next'
export const metadata: Metadata = sharedMetadata


//Styles
import './globals.css'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
	subsets: [
		'latin'
	],
	weight: [
		'300',
		'400',
		'500'
	],
});


//Layouts
import AsideBar from '@/layouts/AsideBar';
import NavBar from '@/layouts/NavBar';


//Typings
type Layout = {
	children: JSX.Element;
}


//Main component content
const RootLayout = ({ children }: Layout): JSX.Element => {
	//Main component render
	return (
		<html
			lang='en'
		>
			<body
				className={`${roboto.className} sm:flex`}
			>
				<NavBar />
				{children}
				<AsideBar />
			</body>
		</html>
	);
};


export default RootLayout; //Export main component
