//NextJS
import Image from 'next/image';
import Link from 'next/link';


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
			<Image
				className='avatar-profile'
				alt={props.displayName}
				src={props.imgUrl}
				width={200}
				height={200}
			/>
			<span className='avatar-display-name' >
				{displayName}
			</span>
		</Link>
	);
};


export default Avatar; //Export main component
