//Layouts
import MobileHomeHeader from "@/layouts/MobileHomeHeader";


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<>
			<MobileHomeHeader />
			<main
				className='grow mt-[53px] md:mt-0'
			>
				Home page
			</main>
		</>
	);
};


export default Page; //Export main component
