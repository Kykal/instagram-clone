//Components
import Post from "@/components/Post";


//Typings
import type PostType from "@/typings/Post";


//Main component content
const PostsList = (): JSX.Element => {

	const posts: PostType[] = [
		{
			id: 'AvK2GvHO4G2',
			user: {
				name: 'someusername',
				imgUrl: 'https://dummyimage.com/500x500/000/fff.png',
				hasStories: true,
			},
			timestamp: '13h',
			likes: 3,
			comments: 16,
			multimedia: [
				{
					url: 'https://dummyimage.com/468x468/000/fff.png',
				},
				{
					url: 'https://dummyimage.com/468x468/555/fff.png',
				},
				{
					url: 'https://dummyimage.com/468x468/255255255/fff.png',
				}
			],
		},
	];

	//Main component render
	return (
		<article
			role="feed"
			className='feed'
		>
			{posts.map( (post, index) => (
				<Post
					key={`feed-post-${index}`}
					{...post}
				/>
			) )}
		</article>
	);
};


export default PostsList; //Export main component
