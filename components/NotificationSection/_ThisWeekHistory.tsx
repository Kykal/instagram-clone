//NextJS
import Link from "next/link";


//Main component content
const ThisWeekHistory = (): JSX.Element => {

	const thisWeekNotifications = [
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
					Hey <Link href={`/kykal`} className='text-blue-400' >@kykal</Link> look at this!
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
	return (
		<>
			
		</>
	);
};


export default ThisWeekHistory; //Export main component
