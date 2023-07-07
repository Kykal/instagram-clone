//NextJS
'use client';
import Link from "next/link";


//Components
import MainNavigation from "./_MainNavigation";
import MoreOptions from "./_MoreOptions";


//Main component content
const NavBar = (): JSX.Element => {
	
	const position = 'sticky left-0 top-0 bottom-0';
	const display = 'flex flex-col gap-6';
	const border = 'border-r border-neutral-300';
	const width = 'w-80';
	const padding = 'p-4';
	const height = 'h-screen';
	

	//Main component render
	return (
		<nav
			className={`${position} ${display} ${border} ${width} ${padding} ${height}`}
		>
			<Link
				href='/'
				id='image-logo'
				className='px-2 py-1.5'
			>
				<h1
					className='text-2xl font-bold'
				>
					Instagram
				</h1>
			</Link>
			<MainNavigation />
			<MoreOptions />
		</nav>
	);
};


export default NavBar; //Export main component
