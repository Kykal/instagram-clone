//NextJS
import Image from "next/image";
import Link from "next/link";


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
					profilePictureUrl={props.profilePictureUrl}
					hasStories={props.hasStories}
				/>
				<StoryProfileName
					username={props.username}
				/>
			</Link>
		</div>
	);
};


export default Story; //Export main component



const StoryImage = (props: StoryImage) => {

	const size = 460;

	return(
		<div
			className='stories-story__profile-picture__container'
			>
			<div
				className='stories-story__profile-picture__story-border__background'
				data-has-stories={props.hasStories}
			/>
			<div
				className="stories-story__profile-picture__story-border"
				data-has-stories={props.hasStories}
			/>
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
