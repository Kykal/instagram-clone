class Post {
	readonly id: string;
	readonly username: string;
	readonly timestamp: Date;
	readonly avatarUrl: string;
	readonly likes: number;
	readonly hasStories: boolean;
	readonly multimedia: string[];

	constructor(
		id: string,
		username: string,
		timestamp: string,
		avatar_url: string,
		likes: number,
		has_stories: boolean,
		multimedia: string[]
	) {
		this.id = id;
		this.username = username;
		this.timestamp = new Date(timestamp);
		this.avatarUrl = avatar_url;
		this.likes = likes;
		this.hasStories = has_stories;
		this.multimedia = multimedia;
	}
}

export default Post;
