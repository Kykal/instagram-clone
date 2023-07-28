//NextJS
import Image from "next/image";


//Configurations
import Routes from "@/configuration/routes";


//Constants
import { profilePictureUrl } from "@/constants";


//Components
import DynamicNavLink from "./DynamicNavLink";


//Typings
type ProfileNavLink = {
	isSectionActive: boolean;
}


//Main component content
const ProfileNavLink = ({isSectionActive}: ProfileNavLink): JSX.Element => {
	const icon = (
		<Image
			src={profilePictureUrl}
			alt='Profile'

			className='rounded-full aspect-square h-6 w-6'

			width={50}
			height={50}
		/>
	);

	//Main component render
	return (
		<DynamicNavLink
			url={Routes.PROFILE}

			label='Profile'
			
			isSectionActive={isSectionActive}

			icon={icon}
			activeIcon={icon}
		/>
	);
};


export default ProfileNavLink; //Export main component
