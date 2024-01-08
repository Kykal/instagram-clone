//Components
import BottomNavigation from "@/components/BottomNavigation";
import Header from "./components/Header";


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<>
			<Header />
			<BottomNavigation />
		</>
	);
};


export default Page; //Export main component
