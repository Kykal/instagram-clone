//React
import { useState } from "react";


//Components
import Controls from "./Controls";
import Indicators from "./Indicators";


//Models
import Post from "@/models/Post";
import MultimediaList from "./MultimediaList";

//Typings
type Carousel = Post;


//Main component content
const Carousel = (props: Carousel): JSX.Element => {

	//React
	const [ activeItem, setActiveItem ] = useState<number>(0);


	const swipeLeftHandler = () => {
		setActiveItem( (prevState) => prevState - 1 );
	};

	const swipeRightHandler = () => {
		setActiveItem( (prevState) => prevState + 1 );
	};


	//Main component render
	return (
		<div
			className='post__body-carousel-container'
		>
			<MultimediaList
				{...props}
				activeItem={activeItem}
			/>
			<Controls
				{...props}
				activeItem={activeItem}
				swipeLeftHandler={swipeLeftHandler}
				swipeRightHandler={swipeRightHandler}
			/>
			<Indicators
				{...props}
				activeItem={activeItem}
			/>
		</div>
	);
};


export default Carousel; //Export main component
