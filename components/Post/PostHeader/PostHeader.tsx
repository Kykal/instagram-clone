//Models
import Post from "@/models/Post";


//Components
import MoreOptionsIconButton from "./MoreOptionsIconButton";


//Typings
import UserData from "./UserData";


//Main component content
const PostHeader = (props: Post): JSX.Element => {
	//Main component render
	return (
		<header
			className='post__header'
		>
			<UserData
				{...props}
			/>
			<MoreOptionsIconButton />
		</header>
	);
};


export default PostHeader; //Export main component
