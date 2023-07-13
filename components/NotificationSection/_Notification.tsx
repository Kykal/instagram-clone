//NextJS
import Image from "next/image";
import Link from "next/link";


//Typings
import {
	People,
	Post
} from "@/typings/Notification";
type Notification = {
	type: 'liked' | 'mention';
	people: People[];
	post: Post;
	timestamp: string;
	comment?: JSX.Element;
	totalPeople?: number;
}
type LeftMedia = {
	people: People[];
}
type Content = {
	type: 'liked' | 'mention';
	people: People[];
	timestamp: string;
	totalPeople?: number;
	comment?: JSX.Element;
}
type RightMedia = {
	post: Post;
}
type PersonProfileAnchor = {
	person: People;
}


//Main component content
const Notification = (props: Notification): JSX.Element => {
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
				{props.type === 'liked' ? (
					<LikedContent
						type={props.type}
						people={props.people}
						timestamp={props.timestamp}
						totalPeople={props.totalPeople}
						comment={props.comment}
					/>
				) : (
					<MentionContent
						type={props.type}
						people={props.people}
						timestamp={props.timestamp}
						comment={props.comment}
					/>
				)}
				<RightMedia
					post={props.post}
				/>
			</div>
		</div>
	);
};


export default Notification; //Export main component



const LeftMedia = (props: LeftMedia) => {

	const size = 50;
	

	if( props.people.length === 1 ){

		const person = props.people[0];
		
		const href = `/${person.username}`;

		return(
			<Link
				href={href}
				className='block rounded-full overflow-hidden min-w-[50px] w-[50px] h-[50px]'
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
			className='relative min-w-[50px] w-[50px] h-[50px]'
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


const LikedContent = (props: Content) => {
	return(
		<div
			className='grow flex h-full items-start text-sm'
		>
			<p>
				<PersonProfileAnchor person={props.people[0]} />, <PersonProfileAnchor person={props.people[1]} /> {props.totalPeople && <>and {props.totalPeople} others</>} liked your comment: {props.comment} <span className='text-neutral-400' >{props.timestamp}</span>
			</p>
		</div>
	);
}


const MentionContent = (props: Content) => {
	return(
		<div
			className='grow flex h-full items-start'
		>
			<p>
				<PersonProfileAnchor person={props.people[0]} /> mentioned you in a comment: {props.comment} <span className='text-neutral-400' >{props.timestamp}</span>
			</p>
		</div>
	);
}


const RightMedia = (props: RightMedia) => {

	const href = `/p/${props.post.postId}`;
	const size = 100;

	return(
		<div
			className='min-w-[50px] w-[50px] h-full'
		>
			<Link
				href={href}
				className='overflow-hidden h-[50px] w-[50px] flex items-center justify-center object-cover'
			>
				<Image
					src={props.post.imgUrl}
					alt='Post'
					width={size}
					height={size}
					className='object-cover aspect-square'
				/>
			</Link>
		</div>
	);
}



const PersonProfileAnchor = (props: PersonProfileAnchor) => {
	
	const href = `/${props.person.username}`;
	
	return(
		<Link className='font-medium' href={href} >
			{props.person.username}
		</Link>
	);
}
