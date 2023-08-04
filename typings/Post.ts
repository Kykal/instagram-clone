//Typings
import User from "./User";


export type Multimedia = {
	url: string;
}

type Post = {
	id: string;
	user: User;
	timestamp: string;
	multimedia: Multimedia[];
	likes: number;
	comments: number;
}


export default Post;
