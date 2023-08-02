//NextJS
import Image from "next/image";


//React
import { useState } from "react";


//MATERIAL DESIGN
//Icons
import {
	BsChevronLeft,
	BsChevronRight,
} from 'react-icons/bs';


//Typings
import Post from "@/typings/Post";


//Main component content
const PostMain = (props: Post): JSX.Element => {
	//Main component render
	return (
		<main
			className='post__body'
		>
			<MultimediaCarousel {...props} />
		</main>
	);
};


export default PostMain; //Export main component



const MultimediaCarousel = (props: Post) => {

	//React
	const [ activeImage, setActiveImage ] = useState<number>(0);


	const swipeLeftHandler = () => {
		setActiveImage( (prevState) => prevState - 1 );
	};

	const swipeRightHandler = () => {
		setActiveImage( (prevState) => prevState + 1 );
	};


	return(
		<div
			className='post__body-carousel-container'
		>
			<ul
				className='post__body-carousel'
			>
				{props.multimedia.map( (item, index) => (
					<li
						key={`post-multimedia-item-${index}`}
						className='post__body-carousel-item'
						style={{
							transform: `translateX(${(index * 100) - (activeImage * 100)}%)`
						}}
					>
						<Image
							src={item.url}
							alt={`post-multimedia-${index}`}
							fill
							className='w-full aspect-square'
						/>
					</li>
				) )}
			</ul>
			{activeImage !== 0 && (
				<div
					className='post__body-carousel-button-container left-0'
				>
					<button
						className='post_body-carousel-button'
						onClick={swipeLeftHandler}
					>
						<BsChevronLeft />
					</button>
				</div>
			)}
			{activeImage !== (props.multimedia.length - 1) && (
				<div
					className='post__body-carousel-button-container right-0'
				>
					<button
						className='post_body-carousel-button'
						onClick={swipeRightHandler}
					>
						<BsChevronRight  />
					</button>
				</div>
			)}
		</div>
	);
}
