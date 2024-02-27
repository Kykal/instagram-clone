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
				{props.displayName}
			</span>
		</Link>
	);
};


export default Avatar; //Export main component
