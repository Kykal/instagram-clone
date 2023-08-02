//NextJS
import Image from "next/image";
import Link from "next/link";


//Typings
import User from "@/typings/User";
import Routes from "@/configuration/routes";


//Main component content
const UserAvatar = (props: User): JSX.Element => {

	const href = `${Routes.STORIES}/${props.name}`;

	//Main component render
	return (
		<Link
			className='avatar-container'
			href={href}
		>
			{props.hasStories && (
				<>
					<div className='avatar-gradient' />
					<div className='avatar-gradient--transparency' />
				</>
			)}
			<Image
				src={props.imgUrl}
				alt='Profile'
				fill
				className="avatar-image"
				sizes='100h'
			/>
		</Link>
	);
};


export default UserAvatar; //Export main component
