//Components
import MobileProfileHeader from '@/layouts/MobileProfileHeader';


//Typings
type Layout = {
	children: JSX.Element;
	params: {
		profile: string;
	}
}


//Main component content
const Layout = (props: Layout): JSX.Element => {
	//Main component render
	return (
		<>
			<MobileProfileHeader
				username={props.params.profile}
			/>
			<main
				className='container mx-auto px-4 py-16 flex flex-col gap-4 items-center'
			>
				{props.children}
			</main>
		</>
	);
};


export default Layout; //Export main component
