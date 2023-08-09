//NextJS
import Image from "next/image";
import Link from "next/link";


//MATERIAL DESIGN
//Icons
import {
	BsPlusCircleFill,
} from 'react-icons/bs';


//Typings
export type Story = {
	username: string;
	profilePictureUrl: string;
	hasStories: boolean;
}
type StoryImage = {
	profilePictureUrl: string;
	hasStories: boolean;
}
type StoryProfileName = {
	username: string;
}


//Main component content
const Story = (props: Story): JSX.Element => {

	const href = `/stories/${props.username}`;


	//Main component render
	return (
		<div
			className='stories-story__container'
		>
			<Link
				href={href}
				className='stories-story'
			>
				<StoryImage
					{...props}
				/>
				<StoryProfileName
					username={props.username}
				/>
			</Link>
		</div>
	);
};


export default Story; //Export main component



const StoryImage = (props: Story) => {

	const size = 460;
	const authUsername = 'kykal';


	return(
		<div
			className='stories-story__profile-picture__container'
			title={`${props.username} picture`}
		>
			{props.hasStories && (
				<>
					<div
						className='stories-story__profile-picture__story-border__background'
					/>
					<div
						className="stories-story__profile-picture__story-border"
					/>
				</>
			)}
			{props.username === authUsername && (
				<div
					className='absolute bottom-0 right-0 w-4 aspect-square flex items-center justify-center'
				>
					<BsPlusCircleFill
						className='stories-story__profile-picture__badge'
						title='Add story'
					/>
					<div
						className='stories-story__profile-picture__badge-background'
					/>
				</div>
			)}
			<Image
				className='stories-story__profile-picture'

				alt='Profile'
				src={props.profilePictureUrl}

				width={size}
				height={size}
			/>
		</div>
	);
}


const StoryProfileName = (props: StoryProfileName) => {

	const label = props.username === 'kykal'
		? 'Your story'
		: props.username;


	return(
		<div
			className='stories-story__profile-label__container'
		>
			<span
				className='stories-story__profile-label'
			>
				{label}
			</span>
		</div>
	);
}
