//NextJS
import Image from "next/image";


//Constant
import { profilePictureUrl } from "@/constants";


//MATERIAL DESIGN
//Components
import ActionIconAnchor from "../UI/ActionIconAnchor";


//Main component content
const ProfileNavItem = (): JSX.Element => {
	//Main component render
	return (
		<li
			className='h-full'
		>
			<ActionIconAnchor
				href='/kykal'
				className='h-full'
				disableActiveIcon
			>
				<Image
					src={profilePictureUrl}
					alt='Profile picture'
					width={100}
					height={100}
					className='h-full rounded-full'
				/>
			</ActionIconAnchor>
		</li>
	);
};


export default ProfileNavItem; //Export main component
