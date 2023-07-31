//Components
import Story from "./Story";
import FakeStories from "./_FakeStories";


//Main component content
const StoriesCarousel = (): JSX.Element => {
	//Main component render
	return (
		<div
			className='stories__carousel'
		>
			<Story
				username='kykal'
				hasStories={false}
				profilePictureUrl='https://avatars.githubusercontent.com/u/54295964'
			/>
			<FakeStories />
		</div>
	);
};


export default StoriesCarousel; //Export main component
