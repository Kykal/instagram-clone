//MATERIAL DESIGN
//Icons
import {
	BsChevronLeft,
	BsChevronRight,
} from 'react-icons/bs';


//Typings
import Post from "@/models/Post";
type Controls = Post & {
	activeItem: number;
	swipeLeftHandler: () => void;
	swipeRightHandler: () => void;
}


//Main component content
const Controls = (props: Controls): JSX.Element | undefined => {

	if( props.multimedia.length === 1 ){
		return;
	}
	

	//Main component render
	return (
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
};


export default Controls; //Export main component
