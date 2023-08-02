//Layouts
import Stories from "@/layouts/Stories/Stories";
import MobileHomeHeader from "@/layouts/MobileHomeHeader";
import HeaderToolbar from "@/layouts/HeaderToolbar";


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<>
			<MobileHomeHeader />
			<div
				className='grow flex flex-col'
			>
				<HeaderToolbar />
				<Stories />
				Home page
			</div>
		</>
	);
};


export default Page; //Export main component
