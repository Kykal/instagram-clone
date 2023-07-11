//NextJS
import Image from "next/image";
import Link from "next/link";


//MATERIAL DESIGN
//Components
//Icons
import {
	BsDot,
} from "react-icons/bs";
import {
	MdClose,
} from "react-icons/md";


//Typings
type Result = {
	username: string;
	name: string;
	followers: number;
	imageUrl: string;
	hasStories: boolean;
}
type ProfilePicture = {
	imageUrl: string;
	hasStories: boolean;
}
type ProfileData = {
	username: string;
	followers: number;
	name: string;
}


//Main component content
const Result = (props: Result): JSX.Element => {

	const url = `/${props.username}`;


	//Main component render
	return (
		<Link
			href={url}
			className='hover:bg-neutral-100 px-6 py-1 cursor-pointer'
		>
			<div
				className='flex gap-2 items-center'
			>
				<ProfilePicture
					imageUrl={props.imageUrl}
					hasStories={props.hasStories}
				/>
				<ProfileData
					followers={props.followers}
					username={props.username}
					name={props.name}
				/>
				<DeleteButton />
			</div>
		</Link>
	);
};


export default Result; //Export main component



const ProfilePicture = (props: ProfilePicture) => {

	const size = 50;

	const gradientBackground = 'bg-gradient-to-tr from-yellow-500 via-orange-500 to-purple-500';
	const border = 'rounded-full border-2 border-transparent';

	return(
		<div
			className={`${props.hasStories && gradientBackground} rounded-full`}
		>
			<div
				className={`${border}`}
			>
				<Image
					src={props.imageUrl}
					alt='Profile picture'
					width={size}
					height={size}

					className='rounded-full border-2 border-white'
				/>
			</div>
		</div>

	);
}


const ProfileData = (props: ProfileData) => {
	return(
		<div
			className='flex flex-col gap text-sm grow'
		>
			<span
				className='font-semibold'
			>
				{props.username}
			</span>
			<div
				className='flex items-center text-neutral-400'
			>
				<span>
					{props.name}
				</span>
				<BsDot />
				<span>
					{props.followers} followers
				</span>
			</div>
		</div>
	);
}


const DeleteButton = () => {
	return(
		<div
			className='flex items-center justify-center text-neutral-400'
			title='Delete'
			aria-label='Delete'
		>
			<MdClose />
		</div>
	);
}
