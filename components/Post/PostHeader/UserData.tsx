//NextJS
import Link from "next/link";


//Configurations
import Routes from "@/configuration/routes";


//Models
import Post from "@/models/Post";


//Components
import UserAvatar from "@/components/UserAvatar";


//Typings
type UserData = Post;


//Main component content
const UserData = (props: UserData): JSX.Element => {

	const usernameHref = `/${props.username}`;


	//Main component render
	return (
	<div
			className='flex h-8 gap-3 items-center'
		>
			<UserAvatar
				{...props}
			/>
			<div
				className='flex items-center gap-1 text-sm'
			>
				<Link
					href={usernameHref}
					className='font-medium text-neutral-800 hover:text-neutral-400 md:text-black dark:text-neutral-100'
				>
					{props.username}
				</Link>
				<span
					className='text-neutral-400'
				>
					&bull;
				</span>
				<Timestamp
					{...props}
				/>
			</div>
		</div>
	);
};


export default UserData; //Export main component



const Timestamp = (props: Post) => {

	const href = `${Routes.POST}/${props.id}`;

	const timestamp = props.timestamp.toLocaleDateString('en', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	});

	return(
		<Link
			href={href}
			className='text-neutral-500'
		>
			{timestamp}
		</Link>
	);
}