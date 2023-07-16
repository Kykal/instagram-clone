//NextJS
'use client';


//Components
import InstagramLogo from "./InstagramLogo";
import NavList from "./NavList";


//Main component content
const NavBar = (): JSX.Element => {
	//Main component render
	return (
		<nav
			className='main-navigation'
		>
			<InstagramLogo />
			<NavList />
		</nav>
	);
};


export default NavBar; //Export main component
