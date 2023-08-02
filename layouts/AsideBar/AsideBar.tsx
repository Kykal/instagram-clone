//Components
import Legal from "./Legal";
import MyProfile from "./MyProfile";
import SuggestedForYou from "./SuggestedForYou";


//Main component content
const AsideBar = (): JSX.Element => {
	//Main component render
	return (
		<aside
			className='home-aside-container'
		>
			<MyProfile />
			<SuggestedForYou />
			<Legal />
		</aside>
	);
};


export default AsideBar; //Export main component
