//NextJS
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'


//ReactJS
import { HTMLAttributes } from 'react'


//Configurations
import sharedMetadata from '../configuration/sharedMetadata'


//Styles
import './globals.css'
const roboto = Roboto({
	subsets: [
		'latin'
	],
	weight: [
		'400',
		'500',
		'700',
	],
});


export const metadata: Metadata = {
	...sharedMetadata,
}


//Main component content
const RootLayout = (props: HTMLAttributes<HTMLHtmlElement>): JSX.Element => {
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


export default RootLayout; //Export main component
