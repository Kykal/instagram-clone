//Models
import Post from "@/models/Post";


//Components
import MoreOptionsIconButton from "./MoreOptionsIconButton";
import UserData from "./UserData";


//Typings
type PostHeader = {
	post: Post;
}

//Main component content
const PostHeader = (props: PostHeader): JSX.Element => {
	//Main component render
	return (
		<header
			className='post__header'
		>
			<UserData
				{...props.post}
			/>
			<MoreOptionsIconButton
				post={props.post}
			/>
		</header>
	);
};


export default PostHeader; //Export main component
