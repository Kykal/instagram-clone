class User {
	readonly username: string;
	readonly name?: string;
	readonly avatarUrl: string;

	constructor(
		username: string,
		avatar_url: string,

		name?: string,
	) {
		this.username = username;
		this.avatarUrl = avatar_url;
		this.name = name;
	}
}


export default User;
