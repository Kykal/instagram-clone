//Layouts
import MobileHomeHeader from "@/layouts/MobileHomeHeader";


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<>
				<MobileHomeHeader />
				<main
					className='w-full pt-16'
				>
					Home page
				</main>
		</>
	);
};


export default Page; //Export main component
