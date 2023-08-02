//NextJS
import Link from "next/link";


//React
import useDisclosure from "@/hooks/useDisclosure";


//MATERIAL DESIGN
//Components
import IconButton from "../UI/IconButton";
//Icons
import {
	FiMoreHorizontal,
} from 'react-icons/fi';


//Components
import UserAvatar from "../UserAvatar";


//Typings
import Post from "@/typings/Post";


//Main component content
const PostHeader = (props: Post): JSX.Element => {
	
	//React
	const [opened, { open, close }] = useDisclosure();


	const usernameHref = `/${props.user.name}`;
	const timestampHref = `/p/${props.id}`;


	//Main component render
	return (
		<header
			className='post__header'
		>
			<div
				className='flex h-8 gap-3 items-center'
			>
				<UserAvatar {...props.user} />
				<div
					className='flex items-center gap-1 text-sm'
				>
					<Link
						href={usernameHref}
						className='font-medium'
					>
						{props.user.name}
					</Link>
					<span>&bull;</span>
					<Link
						href={timestampHref}
						className='text-neutral-500'
					>
						{props.timestamp}
					</Link>
				</div>
			</div>
			<IconButton
				onClick={open}
				className='h-8'
			>
				<FiMoreHorizontal className='text-lg' />
			</IconButton>
		</header>
	);
};


export default PostHeader; //Export main component
