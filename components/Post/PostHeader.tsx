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
import PostModel from "@/models/Post";
import Routes from "@/configuration/routes";
import { getImgProps } from "next/dist/shared/lib/get-img-props";


//Main component content
const PostHeader = (props: PostModel): JSX.Element => {
	
	//React
	const [opened, { open, close }] = useDisclosure();


	const usernameHref = `/${props.username}`;
	const timestampHref = `/p/${props.id}`;


	//Main component render
	return (
		<header
			className='post__header'
		>
			<div
				className='flex h-8 gap-3 items-center'
			>
				<UserAvatar {...props} />
				<div
					className='flex items-center gap-1 text-sm'
				>
					<Link
						href={usernameHref}
						className='font-medium'
					>
						{props.username}
					</Link>
					<span>&bull;</span>
					<Timestamp
						{...props}
					/>
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



const Timestamp = (props: PostModel) => {

	const href = `${Routes.POST}/p/${props.id}`;

	const timestamp = props.timestamp.toLocaleDateString('en', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
	});

	return(
		<Link
			href={href}
			className='text-neutral-500'
		>
			{timestamp}
		</Link>
	);
}
