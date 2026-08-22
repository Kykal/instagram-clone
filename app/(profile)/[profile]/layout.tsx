//Layouts
import MobileProfileHeader from "@/layouts/MobileProfileHeader";


//React
import type { ReactNode } from "react";


//Typings
type Layout = {
	children: ReactNode;
	params: Promise<{
		profile: string;
	}>
}


//Main component content
const Layout = async ({children, params}: Layout): Promise<JSX.Element> => {
	const { profile } = await params;

	//Main component render
	return (
		<>
			<MobileProfileHeader
				username={profile}
			/>
			{children}
		</>
	);
};


export default Layout; //Export main component
