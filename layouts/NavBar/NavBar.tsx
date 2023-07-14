//NextJS
'use client';


//Components
import HomeAnchorNavLink from "@/components/HomeAnchorNavLink";


//Main component content
const NavBar = (): JSX.Element => {
	//Main component render
	return (
		<nav
			className='main-navigation'
		>
			<ul
				className='h-12 md:h-auto flex md:flex-col justify-evenly md:justify-center xl:justify-start md:p-2'
			>
				<li
					className='md:w-12 xl:w-full'
				>
					<HomeAnchorNavLink />
				</li>
			</ul>
		</nav>
	);
};


export default NavBar; //Export main component
