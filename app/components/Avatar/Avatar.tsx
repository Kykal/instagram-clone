//NextJS
import Link from 'next/link';
import Image from 'next/image';


//Styles
import './styles.css';


//Typings
export type AvatarProps = {
	displayName: string;
	imgUrl: string;
	userUrl: string;
	hasStory: boolean;
};


//Main component content
const Avatar = (props: AvatarProps): JSX.Element => {

	const MAX_LENGTH = 9;

	const displayName = props.displayName.length > MAX_LENGTH
		?	`${props.displayName.substring(0, MAX_LENGTH)}...`
		: props.displayName;

	
	//Main component render
	return (
		<Link
			className='avatar-container'
			href={`/stories/${props.displayName}`}
		>
			<div className='relative' >
				<Image
					className='avatar-profile'
					alt={props.displayName}
					src={props.imgUrl}
					width={200}
					height={200}
				/>
				{props.hasStory && <StoryBackground /> }
			</div>
			<span className='avatar-display-name' >
				{displayName}
			</span>
		</Link>
	);
};


export default Avatar; //Export main component


const StoryBackground = () => {
	return (
		<div
			className='avatar-background-container'
		>
			<div
				className='avatar-gradient-background'
			/>
			<div
				className='avatar-white-background'
			/>
		</div>
	);
}
