//NextJS
import Image from "next/image";


//Typings
type MultimediaItem = {
	multimediaItem: string;
	activeItem: number;
	index: number;
}


//Main component content
const MultimediaItem = (props: MultimediaItem): JSX.Element => {
	//Main component render
	return (
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
};


export default MultimediaItem; //Export main component
