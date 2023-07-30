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
			<HeaderToolbar />
			<Stories />
			<main
				className='grow'
			>
				Home page
			</main>
		</>
	);
};


export default Page; //Export main component
