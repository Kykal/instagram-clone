//Models
import User from "./User";


//Typings
import APIUser from "@/typings/APIUser";


class Notification {
	readonly id: string;
	readonly type: 'like' | 'mention';
	readonly users: User[];
	readonly timestamp: Date;
	readonly multimedia: string[];

	readonly comment?: string;
	readonly likes?: number;


	constructor(
		id: string,
		type: 'like' | 'mention',
		users: APIUser[],
		timestamp: string,
		multimedia: string[],

		comment?: string,
		likes?: number,
	) {
		this.id = id;
		this.type = type;
		this.users = users.map( (user) => new User(
			user.username,
			user.avatar_url,
			user.has_stories,
			
			user.name
		) );
		this.timestamp = new Date(timestamp);
		this.multimedia = multimedia;

		this.comment = comment;
		this.likes = likes;
	}
}


export default Notification;
