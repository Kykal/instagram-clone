//Configuration
import Routes from "@/configuration/routes";


//MATERIAL DESIGN
//Icons
import {
	BsChatHeart,
	BsChatHeartFill,
} from 'react-icons/bs';


//Components
import DynamicNavLink from "./DynamicNavLink";


//Typings
type MessagesNavLink = {
	isSectionActive: boolean;
}


//Main component content
const MessagesNavLink = (props: MessagesNavLink): JSX.Element => {
	//Main component render
	return (
		<DynamicNavLink
			url={Routes.MESSAGES}
			icon={<BsChatHeart className='text-2xl' />}
			activeIcon={<BsChatHeartFill className='text-2xl' />}
			isSectionActive={props.isSectionActive}

			label='Messages'
		/>
	);
};


export default MessagesNavLink; //Export main component
