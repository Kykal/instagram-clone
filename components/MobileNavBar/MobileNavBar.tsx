


//Components
import ListDisplay from "./_ListDisplay";


//Main component content
const MobileNavBar = (): JSX.Element => {
	//Main component render
	return (
		<nav
			className='absolute bottom-0 border-t border-neutral-200 w-screen p-2 bg-white'
		>
			<ListDisplay />
		</nav>
	);
};


export default MobileNavBar; //Export main component
