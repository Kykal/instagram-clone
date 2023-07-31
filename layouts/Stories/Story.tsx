//NextJS
import Image from "next/image";


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
	//Main component render
	return (
		<div
			className='stories-story__container'
		>
			<button
				className='stories-story'
			>
				<StoryImage
					profilePictureUrl={props.profilePictureUrl}
					hasStories={props.hasStories}
				/>
				<StoryProfileName
					username={props.username}
				/>
			</button>
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
	return(
		<div
			className='stories-story__profile-label__container'
		>
			<span
				className='stories-story__profile-label'
			>
				{props.username}
			</span>
		</div>
	);
}
