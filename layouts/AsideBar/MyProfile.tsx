//NextJS
import Link from "next/link";

//Components
import UserAvatar from "@/components/UserAvatar";

//Typings
import User from "@/typings/User";


//Main component content
const MyProfile = (): JSX.Element => {

	const user: User = {
		name: 'kykal',
		hasStories: false,
		imgUrl: 'https://avatars.githubusercontent.com/u/54295964',
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
					className='font-semibold'
				>
					{user.name}
				</Link>
				<span
					className='text-neutral-500'
				>
					Alan Benavides
				</span>
			</div>
			<button
				className='text-sm text-sky-500 cursor-not-allowed disabled:text-sky-500/75'
				disabled
			>
				Switch
			</button>
		</div>
	);
};


export default MyProfile; //Export main component
