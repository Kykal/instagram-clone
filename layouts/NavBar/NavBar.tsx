//NextJS
'use client';


//Components
import NavList from "./NavList";


//Main component content
const NavBar = (): JSX.Element => {
	//Main component render
	return (
		<nav
			className='main-navigation'
		>
			<NavList />
		</nav>
	);
};


export default NavBar; //Export main component
