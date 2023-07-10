//NextJS
import Link from 'next/link';


//React
import { useState, useEffect } from 'react';


//MATERIAL DESIGN
//Components
import Divider from "../ui/Divider";


//Components
import NotificationAnchor from "./_NotificationAnchor";


//Typings
import type { NotificationAnchor as NotificationAnchorType } from "./_NotificationAnchor";
type NotificationHistory = {
	notifications: NotificationAnchorType[];
}


//Main component content
const NotificationsActiveItemSection = (): JSX.Element => {

	const todayNotifications: NotificationAnchorType[] = [
		{
			timestamp: '5 h',
			type: 'mention',
			people: [
				{
					imgUrl: 'https://this-person-does-not-exist.com/img/avatar-gen0fa86ff968262b3403dbc81597357e19.jpg',
					username: 'aurora',
				},
			],
			relatedPost: {
				postId: 'KudBmn4ZAC8',
				imgUrl: 'https://images.unsplash.com/photo-1688362378019-15b0312dfce2',
			},
			comment: (
				<>
					<_SelfTag />
				</>
			),
		},
		{
			timestamp: '17 h',
			type: 'liked',
			people: [
				{
					imgUrl: 'https://this-person-does-not-exist.com/img/avatar-genf3b3d45f59e4f4e75bf81846c049b6a3.jpg',
					username: 'sonia',
				},
				{
					imgUrl: 'https://this-person-does-not-exist.com/img/avatar-gen04a42bc6bc647ccd2a4bcb4665abac35.jpg',
					username: 'damaso',
				},
			],
			relatedPost: {
				postId: 'KudBmn4ZAC8',
				imgUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
			},
			comment: (
				<>
					I went to this place before, their food is delicious
				</>
			),
		},
	];


	const thisWeekNotifications: NotificationAnchorType[] = [
		{
			timestamp: '1 d',
			type: 'mention',
			people: [
				{
					imgUrl: 'https://this-person-does-not-exist.com/img/avatar-gen343cf12190b6a0765998fe2b11b867a4.jpg',
					username: 'edson',
				},
			],
			relatedPost: {
				postId: 'KudBmn4ZAC8',
				imgUrl: 'https://images.unsplash.com/photo-1605876516612-a04e21021ead',
			},
			comment: (
				<>
					Hey <_SelfTag /> look at this!
				</>
			),
		},
		{
			timestamp: '3 d',
			type: 'liked',
			totalPeople: 3,
			people: [
				{
					imgUrl: 'https://this-person-does-not-exist.com/img/avatar-genee346ca4b5fc27d960e8302a932445c2.jpg',
					username: 'kiyana',
				},
				{
					imgUrl: 'https://this-person-does-not-exist.com/img/avatar-gen57ebc793839dc98bf237200d5fb700cc.jpg',
					username: 'julio',
				},
			],
			relatedPost: {
				postId: 'KudBmn4ZAC8',
				imgUrl: 'https://images.unsplash.com/photo-1688109511228-68b3dba9b6d8',
			},
			comment: (
				<>
					I love this picture!
				</>
			),
		},
	];


	//Main component render
	return(
		<section
			className='absolute left-20 flex flex-col h-screen top-0 border-r border-neutral-200 rounded-r-md w-96 bg-white'
		>
			<header
				className='px-6 pt-6 pb-4 flex flex-col gap-4'
			>
				<h1
					className='font-bold text-2xl'
				>
					Notifications
				</h1>
			</header>
			<main
				className='flex flex-col gap-4'
			>
				<span
					className='px-6 text-md font-semibold'
				>
					Today
				</span>
				<NotificationsHistory
					notifications={todayNotifications}
				/>
				<Divider />
				<span
					className='px-6 text-md font-semibold'
				>
					This week
				</span>
				<NotificationsHistory
					notifications={thisWeekNotifications}
				/>
			</main>
		</section>
	);
};


export default NotificationsActiveItemSection; //Export main component




const NotificationsHistory = (props: NotificationHistory) => {

	//React
	const [ display, setDisplay ] = useState<boolean>(false);

	useEffect( () => {
		const unsub = setTimeout( () => {
			setDisplay(true);
		}, 500 );


		return () => clearTimeout(unsub);
	} );

	//If it's "loading", show skeletons
	if( !display ){
		return(
			<>
				{[...Array(3)].map( (_, index) => (
					<div
						key={`search-skeleton-${index}`}
						className='px-6 py-2 flex items-center h-16 gap-2'
					>
						<div
							className='bg-neutral-200 h-full aspect-square animate-pulse rounded-full'
						/>
						<div
							className='grow flex flex-col gap-2'
						>
							<div
								className='bg-neutral-200 h-5 w-full animate-pulse rounded-full'
							/>
							<div
								className='bg-neutral-200 h-5 w-full animate-pulse rounded-full'
							/>
						</div>
						<div
							className='bg-neutral-200 h-[50px] aspect-square animate-pulse'
						/>
					</div>
				) )}
			</>
		);
	}

	return(
		<div>
			{props.notifications.map( (notification, index) => (
				<NotificationAnchor
					key={`notification-${notification.type}-${index}`}
					{...notification}
				/>
			) )}
		</div>
	);
}




const _SelfTag = () => {
	return(
		<Link href={`/kykal`} className='text-blue-400' >@kykal</Link>
	);
}
