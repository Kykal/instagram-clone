class User {
	readonly username: string;
	readonly name?: string;
	readonly avatarUrl: string;
	readonly hasStories: boolean;


	constructor(
		username: string,
		avatar_url: string,
		has_stories: boolean,

		name?: string,
	) {
		this.username = username;
		this.avatarUrl = avatar_url;
		this.hasStories = has_stories;
		this.name = name;
	}
}


export default User;
