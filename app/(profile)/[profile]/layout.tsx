//Layouts
import MobileProfileHeader from "@/layouts/MobileProfileHeader";


//Typings
type Layout = {
	children: JSX.Element;
	params: {
		profile: string;
	}
}


//Main component content
const Layout = ({children, params}: Layout): JSX.Element => {
	//Main component render
	return (
		<>
			<MobileProfileHeader
				username={params.profile}
			/>
			{children}
		</>
	);
};


export default Layout; //Export main component
