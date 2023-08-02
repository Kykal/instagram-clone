//Layouts
import Stories from "../Stories";
import PostsList from "./PostsList";


//Main component content
const Feed = (): JSX.Element => {
	//Main component render
	return (
		<main
			className='flex flex-col items-center w-full md:max-w-2xl md:gap-14'
		>
			<Stories />
			<PostsList />
		</main>
	);
};


export default Feed; //Export main component
