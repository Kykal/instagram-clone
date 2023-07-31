//NextJS
import Image from "next/image";


//Main component content
const Story = (): JSX.Element => {
	//Main component render
	return (
		<div
			className='stories-story__container'
		>
			<button
				className='stories-story'
			>
				<StoryImage />
				<StoryProfileName />
			</button>
		</div>
	);
};


export default Story; //Export main component



const StoryImage = () => {

	const size = 460;
	const src = 'https://avatars.githubusercontent.com/u/54295964';

	return(
		<div
			className='stories-story__profile-picture__container'
		>
			<Image
				className='stories-story__profile-picture'

				alt='Profile'
				src={src}

				width={size}
				height={size}
			/>
		</div>
	);
}


const StoryProfileName = () => {
	return(
		<div
			className='stories-story__profile-label__container'
		>
			<span
				className='stories-story__profile-label'
			>
				Your story
			</span>
		</div>
	);
}
