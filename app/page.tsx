//Layouts
import MobileHomeHeader from "@/layouts/MobileHomeHeader";
import Feed from "@/layouts/Feed";


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<>
			<MobileHomeHeader />
			<Feed />
		</>
	);
};


export default Page; //Export main component
