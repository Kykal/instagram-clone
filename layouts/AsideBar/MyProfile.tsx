//NextJS
import Link from "next/link";


//Components
import UserAvatar from "@/components/UserAvatar";


//Models
import User from "@/models/User";


//Main component content
const MyProfile = (): JSX.Element => {

	const user: User = {
		username: 'kykal',
		name: 'Alan Benavides',
		hasStories: false,
		avatarUrl: 'https://avatars.githubusercontent.com/u/54295964',
	}


	//Main component render
	return (
		<div
			className='flex gap-2 items-center'
		>
			<div
				className='h-12'
			>
				<UserAvatar {...user} />
			</div>
			<div
				className='flex flex-col text-sm grow'
			>
				<Link
					href={`/${user.name}`}
					className='font-medium'
				>
					{user.name}
				</Link>
				<span
					className='text-neutral-500'
				>
					{user.name}
				</span>
			</div>
			<button
				className='text-xs text-sky-500 font-medium cursor-not-allowed disabled:text-sky-500/75'
				disabled
			>
				Switch
			</button>
		</div>
	);
};


export default MyProfile; //Export main component
