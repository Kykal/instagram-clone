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
import PostModel from "@/models/Post";
type MultimediaList = PostModel & {
	activeItem: number;
}
type MultimediaItem = {
	multimediaItem: string;
	activeItem: number;
	index: number;
}
type Indicators = PostModel & {
	activeItem: number;
}
type Controls = PostModel & {
	activeItem: number;
	swipeLeftHandler: () => void;
	swipeRightHandler: () => void;

}


//Main component content
const PostMain = (props: PostModel): JSX.Element => {
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



const MultimediaCarousel = (props: PostModel) => {

	//React
	const [ activeItem, setActiveItem ] = useState<number>(0);


	const swipeLeftHandler = () => {
		setActiveItem( (prevState) => prevState - 1 );
	};

	const swipeRightHandler = () => {
		setActiveItem( (prevState) => prevState + 1 );
	};


	return(
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
}


const Controls = (props: Controls) => {

	if( props.multimedia.length === 0 ){
		return;
	}
	

	return(
		<>
			{props.activeItem !== 0 && (
				<div
					className='post__body-carousel-button-container left-0'
				>
					<button
						className='post_body-carousel-button'
						onClick={props.swipeLeftHandler}
					>
						<BsChevronLeft />
					</button>
				</div>
			)}
			{props.activeItem !== (props.multimedia.length - 1) && (
				<div
					className='post__body-carousel-button-container right-0'
				>
					<button
						className='post_body-carousel-button'
						onClick={props.swipeRightHandler}
					>
						<BsChevronRight  />
					</button>
				</div>
			)}
		</>
	);
}


const MultimediaList = (props: MultimediaList) => {
	return(
		<ul
			className='post__body-carousel'
		>
			{props.multimedia.map( (item, index) => (
				<MultimediaItem
					key={`post-multimedia-item-${index}`}
					activeItem={props.activeItem}
					multimediaItem={item}
					index={index}
				/>
			) )}
		</ul>
	);
}


const MultimediaItem = (props: MultimediaItem) => {
	return(
		<li
			className='post__body-carousel-item'
			style={{
				transform: `translateX(${(props.index * 100) - (props.activeItem * 100)}%)`
			}}
		>
			<Image
				src={props.multimediaItem}
				alt={`post-multimedia-${props.index}`}
				fill
				className='object-contain'
				sizes='100vw'
			/>
		</li>
	);
}


const Indicators = (props: Indicators) => {

	if( props.multimedia.length === 0 ){
		return;
	}

	return(
		<div
			className='absolute bottom-0 pb-2 w-full flex items-center justify-center'
		>
			<div
				className='h-2 flex items-center justify-center gap-1'
			>
				{props.multimedia.map( (_, index) => (
					<div
						key={`${props.username}-post-item-${index}`}
						className={`rounded-full h-full aspect-square transition-all ${props.activeItem === index ? 'bg-white' : 'bg-neutral-100/50'}`}
					/>
				) )}
			</div>
		</div>
	);
}
