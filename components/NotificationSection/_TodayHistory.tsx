//NextJS
import Link from "next/link";


//Main component content
const TodayHistory = (): JSX.Element => {


	const todayNotifications = [
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
					<Link href={`/kykal`} className='text-blue-400' >@kykal</Link>
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

	//Main component render
	return (
		<>
			
		</>
	);
};


export default TodayHistory; //Export main component
