//Layouts
import MobileHomeHeader from "@/layouts/MobileHomeHeader";
import Feed from "@/layouts/Feed";
import AsideBar from "@/layouts/AsideBar";


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<>
			<MobileHomeHeader />
			<div
				className='feed__container'
			>
				<Feed />
				<AsideBar />
			</div>
		</>
	);
};


export default Page; //Export main component
