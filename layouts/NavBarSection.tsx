//Typings
type NavBarSection = {
	children: JSX.Element;
}


//Main component content
const NavBarSection = (props: NavBarSection): JSX.Element => {
	//Main component render
	return (
		<section
			className='navbar-section'
		>
			{props.children}
		</section>
	);
};


export default NavBarSection; //Export main component
