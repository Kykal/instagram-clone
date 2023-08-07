//NextJS
import Image from "next/image";
import Link from "next/link";


//Typings
import User from "@/typings/User";
import Routes from "@/configuration/routes";


//Main component content
const UserAvatar = (props: User): JSX.Element => {

	const storiesHref = `${Routes.STORIES}/${props.username}`;
	const profileHref = `/${props.username}`;


	const storiesBorder = (
		<>
			<div className='avatar-gradient' />
			<div className='avatar-gradient--transparency' />
		</>
	);
	

	//Main component render
	return (
		<Link
			className='avatar-container'
			href={props.hasStories ? storiesHref : profileHref}
		>
			{props.hasStories && storiesBorder}
			<Image
				src={props.avatarUrl}
				alt='Profile'
				fill
				className="avatar-image"
				sizes='100h'
			/>
		</Link>
	);
};


export default UserAvatar; //Export main component
