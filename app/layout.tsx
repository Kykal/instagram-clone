//Configuration
import sharedMetadata from '@/configuration/sharedMetadata';


//NextJS
import type { Metadata } from 'next'
export const metadata: Metadata = sharedMetadata


//Styles
import './globals.css'
import { Roboto } from 'next/font/google'
const roboto = Roboto({
	subsets: ['latin'],
	weight: '400',
});


//Typings
type Layout = {
	children: JSX.Element;
}


//Main component content
const Layout = (props: Layout): JSX.Element => {
	//Main component render
	return (
		<html
			lang='en'
		>
			<body
				className={roboto.className}
			>
				{props.children}
			</body>
		</html>
	);
};


export default Layout; //Export main component
