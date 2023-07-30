//Components
import StoriesCarousel from "./StoriesCarousel";


//Main component content
const Stories = (): JSX.Element => {
	//Main component render
	return (
		<div
			className='stories__container'
		>
			<StoriesCarousel />
		</div>
	);
};


export default Stories; //Export main component
