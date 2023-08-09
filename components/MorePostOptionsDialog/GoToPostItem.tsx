//NextJS
import Link from "next/link";


//Configurations
import Routes from "@/configuration/routes";


//Models
import Post from "@/models/Post";


//Typings
type GoToPostItem = {
	post: Post;
}


//Main component content
const GoToPostItem = (props: GoToPostItem): JSX.Element => {

	const href = `${Routes.POST}/${props.post.id}`;

	const className = 'block text-center active:bg-neutral-200 dark:active:bg-neutral-900/25 w-full p-3 disabled:text-neutral-500/50 disabled:active:bg-transparent dark:disabled:bg-transparent';


	//Main component render
	return (
		<Link
			href={href}
			className={className}
		>
			Go to post
		</Link>
	);
};


export default GoToPostItem; //Export main component
