//NextJS
'use client';


//Components
import PostHeader from "./_PostHeader";
import PostMain from "./_PostMain";


//Typings
import Post from "@/typings/Post";


//Main component content
const Post = (props: Post): JSX.Element => {
	//Main component render
	return (
		<section
			className='post-container'
		>
			<PostHeader {...props} />
			<PostMain {...props} />
			<footer>

			</footer>
		</section>
	);
};


export default Post; //Export main component
