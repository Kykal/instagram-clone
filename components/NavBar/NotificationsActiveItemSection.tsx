//Components
import NotificationAnchor from "./_NotificationAnchor";


//Typings
import {
	NotificationPeople,
	NotificationRelatedPost,
} from '@/typings/Notification';
import type { NotificationAnchor as NotificationAnchorType } from "./_NotificationAnchor";
import Divider from "../ui/Divider";


//Main component content
const NotificationsActiveItemSection = (): JSX.Element => {

	const notifications: NotificationAnchorType[] = [
		{
			type: 'mention',
			people: [
				{
					imgUrl: 'https://this-person-does-not-exist.com/img/avatar-gen118b84e42249c49a4104976acfd0a2dd.jpg',
					username: 'Aurora',
				},
			],
			relatedPost: {
				postId: 'KudBmn4ZAC8',
				imgUrl: 'https://images.unsplash.com/photo-1688362378019-15b0312dfce2',
			},
		},
		{
			type: 'liked',
			people: [
				{
					imgUrl: 'https://this-person-does-not-exist.com/img/avatar-genf3b3d45f59e4f4e75bf81846c049b6a3.jpg',
					username: 'Sonia',
				},
				{
					imgUrl: 'https://this-person-does-not-exist.com/img/avatar-gen04a42bc6bc647ccd2a4bcb4665abac35.jpg',
					username: 'Dámaso',
				},
			],
			relatedPost: {
				postId: 'KudBmn4ZAC8',
				imgUrl: 'https://images.unsplash.com/photo-1688109511228-68b3dba9b6d8',
			},
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
				<div>
					{notifications.map( (notification, index) => (
						<NotificationAnchor
							key={`notification-${notification.type}-${index}`}
							{...notification}
						/>
					) )}
				</div>
				<Divider />
			</main>
		</section>
	);
};


export default NotificationsActiveItemSection; //Export main component
