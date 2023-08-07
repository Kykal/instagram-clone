//Typings
import User from "./User";


export type Multimedia = {
	url: string;
}

type Post = User & {
	id: string;
	timestamp: string;
	multimedia: Multimedia[];
	likes: number;
	comments: number;
}


export default Post;
