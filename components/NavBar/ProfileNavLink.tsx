//NextJS
import Image from "next/image";
import { usePathname } from "next/navigation";


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

	const baseIconStyles = 'rounded-full aspect-square h-6 w-6';

	const icon = (
		<Image
			src={profilePictureUrl}
			alt='Profile'

			className={baseIconStyles}

			width={50}
			height={50}
		/>
	);

	const activeIcon = (
		<Image
			src={profilePictureUrl}
			alt='Profile'

			className={`${baseIconStyles} border-2 border-white`}

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
			activeIcon={activeIcon}
		/>
	);
};


export default ProfileNavLink; //Export main component
