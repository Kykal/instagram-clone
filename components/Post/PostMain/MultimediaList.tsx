//Models
import Post from "@/models/Post";


//Components
import MultimediaItem from "./MultimediaItem";


//Typings
type MultimediaList = Post & {
	activeItem: number;
}


//Main component content
const MultimediaList = (props: MultimediaList): JSX.Element => {


	//Main component render
	return (
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
};


export default MultimediaList; //Export main component
