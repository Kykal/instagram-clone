//NextJS
import Image from "next/image";
import Link from "next/link";


//Typings
import NotificationModel from "@/models/Notification";


//Main component content
const Notification = (props: NotificationModel): JSX.Element => {
	//Main component render
	return (
		<div
			className='hover:bg-neutral-100 cursor-pointer py-2'
		>
			<div
				className='px-6 h-full flex items-center gap-2'
			>
				<LeftMedia {...props} />
				{props.type === 'like' ? (
					<LikedContent {...props} />
				) : (
					<MentionContent {...props} />
				)}
				<RightMedia {...props} />
			</div>
		</div>
	);
};


export default Notification; //Export main component



const LeftMedia = (props: NotificationModel) => {

	const size = 50;
	

	if( props.users.length === 1 ){

		const person = props.users[0];
		
		const href = `/${person.username}`;

		return(
			<Link
				href={href}
				className='block rounded-full overflow-hidden min-w-[50px] w-[50px] h-[50px]'
			>
				<Image
					src={person.avatarUrl}
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
				src={props.users[0].avatarUrl}
				alt='Profile picture'
				width={size/1.5}
				height={size/1.5}
				className='absolute top-0 left-0 rounded-full border-2 border-white'
			/>
			<Image
				src={props.users[1].avatarUrl}
				alt='Profile picture'
				width={size/1.5}
				height={size/1.5}
				className='absolute bottom-0.5 right-0.5 rounded-full border-2 border-white'
			/>
		</div>
	);
}


const LikedContent = (props: NotificationModel) => {

	const timestamp = props.timestamp.toLocaleDateString('en', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	});

	return(
		<div
			className='grow flex h-full items-start text-sm'
		>
			<p>
				<PersonProfileAnchor {...props} />, <PersonProfileAnchor {...props} /> {props.likes && <>and {props.likes} others</>} liked your comment: {props.comment} <span className='text-neutral-400' >{timestamp}</span>
			</p>
		</div>
	);
}


const MentionContent = (props: NotificationModel) => {
	
	const timestamp = props.timestamp.toLocaleDateString('en', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	});
	
	return(
		<div
			className='grow flex h-full items-start'
		>
			<p>
				<PersonProfileAnchor {...props} /> mentioned you in a comment: {props.comment} <span className='text-neutral-400' >{timestamp}</span>
			</p>
		</div>
	);
}


const RightMedia = (props: NotificationModel) => {

	const href = `/p/${props.id}`;
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
					src={props.multimedia[0]}
					alt='Post'
					width={size}
					height={size}
					className='object-cover aspect-square'
				/>
			</Link>
		</div>
	);
}



const PersonProfileAnchor = (props: NotificationModel) => {
	
	const href = `/${props.users[0].username}`;
	
	return(
		<Link className='font-medium' href={href} >
			{props.users[0].username}
		</Link>
	);
}
