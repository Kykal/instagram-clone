//React
import { Fragment } from 'react';


//Components
import Divider from "@/components/UI/Divider";

//Main component content
const PostsListSkeleton = (): JSX.Element => {
	//Main component render
	return (
		<article
			role='feed'
			className='feed gap-4'
		>
			{[...Array(3)].map( (_, index) => (
				<Fragment
					key={`feed-item-skeleton-${index}`}
				>
					<_Skeleton
					/>
					<Divider
						className='hidden md:block w-full md:w-[470px]'
					/>
				</Fragment>
			) )}
		</article>
	);
};


export default PostsListSkeleton; //Export main component



const _Skeleton = () => {
	return(
		<section
			className='post-container flex flex-col gap-2'
		>
			<header
				className='post__header bg-neutral-200 animate-pulse rounded-md'
			/>
			<main
				className='post_body h-80 bg-neutral-200 animate-pulse rounded-md'
			/>
		</section>
	);
}
