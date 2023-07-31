//Components
import Story from "./Story";


//Main component content
const StoriesCarousel = (): JSX.Element => {
	//Main component render
	return (
		<div
			className='stories__carousel'
		>
			{[...Array(10)].map( (_, index) => (
				<Story
					key={index}
				/>
			) )}
		</div>
	);
};


export default StoriesCarousel; //Export main component
