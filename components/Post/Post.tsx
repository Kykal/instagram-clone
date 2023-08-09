//NextJS
'use client';


//Components
import PostHeader from "./PostHeader";
import PostMain from "./PostMain";


//Typings
import PostModel from "@/models/Post";


//Main component content
const Post = (props: PostModel): JSX.Element => {
	//Main component render
	return (
		<section
			className='post-container'
		>
			<PostHeader
				post={props}
			/>
			<PostMain {...props} />
		</section>
	);
};


export default Post; //Export main component
