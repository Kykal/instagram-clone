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
type Content = {
	type: 'liked' | 'mention';
	people: NotificationPeople[];
}
type RightMedia = {
	relatedPost: NotificationRelatedPost;
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
				{props.type === 'liked' ? (
					<LikedContent
						type={props.type}
						people={props.people}
					/>
				) : (
					<MentionContent
						type={props.type}
						people={props.people}
					/>
				)}
				<RightMedia
					relatedPost={props.relatedPost}
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


const LikedContent = (props: Content) => {

	if( props.people.length === 1 ){
		return(
			<>

			</>
		);
	}

	return(
		<div
			className='grow flex h-full items-start text-sm'
		>
			<p>
				<Link
					href={`/${props.people[0].username}`}
					className='font-semibold'
				>
					{props.people[0].username}
				</Link>
			</p>
		</div>
	);
}

const MentionContent = (props: Content) => {

	if( props.people.length === 1 ){
		return(
			<>

			</>
		);
	}

	return(
		<div
			className='grow flex h-full items-start text-sm'
		>
			<p>
				<Link
					href={`/${props.people[0].username}`}
					className='font-semibold'
				>
					{props.people[0].username}
				</Link>
			</p>
		</div>
	);
}


const RightMedia = (props: RightMedia) => {

	const href = `/p/${props.relatedPost.postId}`;
	const size = 100;

	return(
		<div
			className='w-[50px] h-full'
		>
			<Link
				href={href}
				className='overflow-hidden h-[50px] w-[50px] flex items-center justify-center object-cover'
			>
				<Image
					src={props.relatedPost.imgUrl}
					alt='Post'
					width={size}
					height={size}
					className='object-cover aspect-square'
				/>
			</Link>
		</div>
	);
}