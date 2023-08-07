type APIPost = {
	readonly id: string;
	
	readonly username: string;
	readonly timestamp: string;
	readonly avatar_url: string;
	readonly likes: number;
	readonly has_stories: boolean;
	readonly multimedia: string[];
}


export default APIPost;
