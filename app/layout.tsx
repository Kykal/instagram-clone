//Configuration
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


//Components
import AsideBar from '@/layouts/AsideBar';
import NavBar from '@/layouts/NavBar';
import Header from '@/layouts/Header';


//Typings
type Layout = {
	children: JSX.Element;
}


//Main component content
const Layout = (props: Layout): JSX.Element => {

	const display = 'flex';


	//Main component render
	return (
		<html
			lang='en'
		>
			<body
				className={`${roboto.className} ${display}`}
			>
				<Header />
				<NavBar />
				<main
					className='container mx-auto px-4 py-16 flex flex-col gap-4 items-center'
				>
					{props.children}
				</main>
				<AsideBar />
			</body>
		</html>
	);
};


export default Layout; //Export main component
