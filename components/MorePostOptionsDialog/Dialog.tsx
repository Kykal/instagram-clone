import NativeDialog from 'native-react-dialog';


//MATERIAL DESIGN
//Components
import Divider from '../UI/Divider';


//Models
import Post from '@/models/Post';
import Link from 'next/link';
import Routes from '@/configuration/routes';
import CopyLinkItem from './CopyLinkItem';


//Typings
type Dialog = {
	post: Post;
	opened: boolean;
	onClose: () => void;
}


//Main component content
const Dialog = (props: Dialog): JSX.Element => {
	//Main component render
	return (
		<NativeDialog
			open={props.opened}
			onClose={props.onClose}
			className='rounded-md w-72 md:w-full max-w-md p-0'
		>
			<menu
				className='w-full flex flex-col text-sm font-light'
			>
				<li>
					<button
						className='active:bg-neutral-200 w-full p-3 font-medium text-red-500 disabled:text-red-500/50 disabled:active:bg-transparent'
						disabled
					>
						Report
					</button>
				</li>
				<Divider />
				<li>
					<button
						className='active:bg-neutral-200 w-full p-3 font-medium text-red-500 disabled:text-red-500/50 disabled:active:bg-transparent'
						disabled
					>
						Unfollow
					</button>
				</li>
				<Divider />
				<li>
					<button
						className='active:bg-neutral-200 w-full p-3 disabled:text-neutral-500/50 disabled:active:bg-transparent'
						disabled
					>
						Add to favorites
					</button>
				</li>
				<Divider />
				<li>
					<Link
						href={`${Routes.POST}/${props.post.id}`}
						className='block text-center active:bg-neutral-200 w-full p-3'
					>
						Go to post
					</Link>
				</li>
				<Divider />
				<li>
					<button
						className='active:bg-neutral-200 w-full p-3 disabled:text-neutral-500/50 disabled:active:bg-transparent'
						disabled
					>
						Share to...
					</button>
				</li>
				<Divider />
				<li>
					<CopyLinkItem
						post={props.post}
						onClose={props.onClose}
					/>
				</li>
				<Divider />
				<li>
					<button
						className='active:bg-neutral-200 w-full p-3 disabled:text-neutral-500/50 disabled:active:bg-transparent'
						disabled
					>
						Embed
					</button>
				</li>
				<Divider />
				<li>
					<button
						className='active:bg-neutral-200 w-full p-3 disabled:text-neutral-500/50 disabled:active:bg-transparent'
						disabled
					>
						About this account
					</button>
				</li>
				<Divider />
				<li>
					<button
						onClick={props.onClose}
						className='active:bg-neutral-200 w-full p-3'
					>
						Cancel
					</button>
				</li>
			</menu>
		</NativeDialog>
	);
};


export default Dialog; //Export main component
