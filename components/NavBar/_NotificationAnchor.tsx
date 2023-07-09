//NextJS
import Link from "next/link";
import Image from "next/image";


//Typings
import {
	NotificationPeople,
	NotificationRelatedPost
} from "@/typings/Notification";
export type NotificationAnchor = {
	type: 'liked' | 'mention';
	people: NotificationPeople[];
	relatedPost: NotificationRelatedPost;
}
type LeftMedia = {
	people: NotificationPeople[];
}


//Main component content
const NotificationAnchor = (props: NotificationAnchor): JSX.Element => {
	//Main component render
	return (
		<div
			className='hover:bg-neutral-100 cursor-pointer py-2'
		>
			<div
				className='px-6 h-full flex items-center gap-2'
			>
				<LeftMedia
					people={props.people}
				/>
			</div>
		</div>
	);
};


export default NotificationAnchor; //Export main component



const LeftMedia = (props: LeftMedia) => {

	const size = 50;
	

	if( props.people.length === 1 ){

		const person = props.people[0];
		
		const href = `/${person.username}`;

		return(
			<Link
				href={href}
				className='block rounded-full overflow-hidden w-[50px] h-[50px]'
			>
				<Image
					src={person.imgUrl}
					alt='Profile picure'
					width={size}
					height={size}
				/>
			</Link>
		);
	}

	return(
		<div
			className='relative w-[50px] h-[50px]'
		>
			<Image
				src={props.people[0].imgUrl}
				alt='Profile picture'
				width={size/1.5}
				height={size/1.5}
				className='absolute top-0 left-0 rounded-full border-2 border-white'
			/>
			<Image
				src={props.people[1].imgUrl}
				alt='Profile picture'
				width={size/1.5}
				height={size/1.5}
				className='absolute bottom-0.5 right-0.5 rounded-full border-2 border-white'
			/>
		</div>
	);
}
