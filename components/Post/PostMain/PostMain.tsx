//Models
import PostModel from "@/models/Post";
import Carousel from "./Carousel";


//Main component content
const PostMain = (props: PostModel): JSX.Element => {
	//Main component render
	return (
		<main
			className='post__body'
		>
			<Carousel
				{...props}
			/>
		</main>
	);
};


export default PostMain; //Export main component
