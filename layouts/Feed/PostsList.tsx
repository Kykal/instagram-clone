//NextJS
'use client';

//React
import { Fragment } from 'react';


//Configurations
import { API_ENDPOINT } from "@/configuration/constants";


//Fetch
import useSWR from "swr";


//MATERIAL DESIGN
//Components
import Divider from '@/components/UI/Divider';


//Models
import PostModel from "@/models/Post"; 


//Components
import Post from "@/components/Post";
import PostsListSkeleton from "./PostsListSkeleton";


//Typings
import APIPost from '@/typings/APIPost';
type SWR = {

}

//Main component content
const PostsList = (): JSX.Element => {

	//Fetch
	const url = `${API_ENDPOINT}/posts`;
	const fetcher = (url: string) => fetch(url).then( response => {
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

	
	const posts: PostModel[] = data.map( (item: APIPost) => new PostModel(
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
				<Fragment
					key={`feed-post-${index}`}
				>
					<Post
						{...post}
					/>
					<Divider
						className='hidden md:block w-full md:w-[470px]'
					/>
				</Fragment>
			) )}
		</article>
	);
};


export default PostsList; //Export main component
