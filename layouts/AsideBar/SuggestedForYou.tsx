//NextJS
import Link from "next/link";


//Configurations
import Routes from "@/configuration/routes";


//Components
import SuggestedProfile from "./_SugestedProfile";


//Typings
import type { SuggestedProfile as SuggestedProfileType } from './_SugestedProfile';


//Main component content
const SuggestedForYou = (): JSX.Element => {
	//Main component render
	return (
		<div
			className='suggested-for-you-container'
		>
			<div
				className='flex justify-between text-sm items-center'
			>
				<span
					className='font-medium text-neutral-600 '
				>
					Suggested for you
				</span>
				<Link
					href={Routes.EXPLORE_PEOPLE}
					className='hover:text-neutral-500 text-xs font-medium'
				>
					See All
				</Link>
			</div>
			<SuggestedProfiles />
		</div>
	);
};


export default SuggestedForYou; //Export main component



const SuggestedProfiles = (): JSX.Element => {

	const users: SuggestedProfileType[] = [
		{
			followedBy: 'its_my_other_me',
			user: {
				hasStories: true,
				name: 'its_me',
				imgUrl: 'https://dummyimage.com/500x500/000/fff.png',
			}
		},
		{
			followedBy: 'ligo_leyen',
			user: {
				hasStories: false,
				name: 'rito_games',
				imgUrl: 'https://dummyimage.com/500x500/000/fff.png',
			}
		},
		{
			followedBy: 'vue',
			user: {
				hasStories: false,
				name: 'angular',
				imgUrl: 'https://dummyimage.com/500x500/000/fff.png',
			}
		},
		{
			followedBy: 'vercel',
			user: {
				hasStories: false,
				name: 'adjacentjs',
				imgUrl: 'https://dummyimage.com/500x500/000/fff.png',
			}
		}
	];

	return (
		<div
			className='flex flex-col gap-4'
		>
			{users.map( (user, index) => (
				<SuggestedProfile
					key={`suggested-profile-${index}`}
					{...user}
				/>
			) )}
		</div>
	);
};
