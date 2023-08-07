//NextJS
import Link from "next/link";


//Components
import UserAvatar from "@/components/UserAvatar";


//Typings
import User from "@/models/User";
export type SuggestedProfile = {
	user: User;
	followedBy: string;
}


//Main component content
const SuggestedProfile = (props: SuggestedProfile): JSX.Element => {
	//Main component render
	return (
		<div
			className='flex gap-2 items-center'
		>
			<div
				className='h-12'
			>
				<UserAvatar {...props.user} />
			</div>
			<div
				className='flex flex-col grow'
			>
				<Link
					href={`/${props.user.name}`}
					className='font-medium text-sm'
				>
					{props.user.name}
				</Link>
				<span
					className='text-neutral-500 text-xs'
				>
					Followed by {props.followedBy}
				</span>
			</div>
			<button
				className='text-xs font-medium text-sky-500 hover:text-sky-700'
			>
				Follow
			</button>
		</div>
	);
};


export default SuggestedProfile; //Export main component
