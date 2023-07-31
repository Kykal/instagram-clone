//Components
import Story, { Story as StoryType } from "./Story";


//Main component content
const FakeStories = (): JSX.Element => {

	const stories: StoryType[] = [
		{
			username: 'abovelook_2',
			hasStories: true,
			profilePictureUrl: 'https://dummyimage.com/460x460/000/fff.png',
		},
		{
			username: '3k',
			hasStories: true,
			profilePictureUrl: 'https://dummyimage.com/460x460/000/fff.png',
		},
		{
			username: 'stonestar',
			hasStories: false,
			profilePictureUrl: 'https://dummyimage.com/460x460/000/fff.png',
		},
		{
			username: 'rito_games',
			hasStories: false,
			profilePictureUrl: 'https://dummyimage.com/460x460/000/fff.png',
		},
		{
			username: 'happy_fish',
			hasStories: false,
			profilePictureUrl: 'https://dummyimage.com/460x460/000/fff.png',
		}
	];


	//Main component render
	return (
		<>
			{stories.map( (userData, index) => (
				<Story
					key={index}
					{...userData}
				/>
			) )}
		</>
	);
};


export default FakeStories; //Export main component
