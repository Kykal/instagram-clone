//NextJS
'use client';

//Fetch
import useSWR from "swr";


//Models
import PostModel from "@/models/Post"; 


//Components
import Post from "@/components/Post";


//Typings
import { API_ENDPOINT } from "@/configuration/constants";
import PostsListSkeleton from "./PostsListSkeleton";



//Main component content
const PostsList = (): JSX.Element => {

	//Fetch
	const url = `${API_ENDPOINT}/posts`;
	const fetcher = async (url: string) => await fetch(url).then( response => {
		return response.json();
	} );
	const { data, error, isLoading } = useSWR(url, fetcher);
	
	if( isLoading ){
		return(
			<PostsListSkeleton />
		);
	}

	if( error ){
		return(
			<h1>
				Failed to fetch data. Try again.
			</h1>
		);
	}

	const posts: PostModel[] = data.map( (item: any) => new PostModel(
		item.id,
		item.username,
		item.timestamp,
		item.avatar_url,
		item.likes,
		item.has_stories,
		item.multimedia,
	) );
		
	//Main component render
	return (
		<article
			role="feed"
			className='feed'
		>
			{posts.map( (post: PostModel, index: number) => (
				<Post
					key={`feed-post-${index}`}
					{...post}
				/>
			) )}
		</article>
	);
};


export default PostsList; //Export main component
