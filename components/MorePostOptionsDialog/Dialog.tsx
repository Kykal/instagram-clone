import NativeDialog from 'native-react-dialog';


//MATERIAL DESIGN
//Components
import Divider from '../UI/Divider';


//Models
import Post from '@/models/Post';
import Link from 'next/link';
import Routes from '@/configuration/routes';
import CopyLinkItem from './CopyLinkItem';
import DisabledItem from './DisabledItem';
import DisabledDangerItem from './DisabledDangerItem';
import GoToPostItem from './GoToPostItem';


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
			className='rounded-md w-72 md:w-full max-w-md p-0 bg-white dark:bg-neutral-800'
		>
			<menu
				className='w-full flex flex-col text-sm font-light text-black dark:text-white'
			>
				<li>
					<DisabledDangerItem>
						Report
					</DisabledDangerItem>
				</li>
				<Divider />
				<li>
					<DisabledDangerItem>
					Unfollow
					</DisabledDangerItem>
				</li>
				<Divider />
				<li>
					<DisabledItem>
						Add to favorites
					</DisabledItem>
				</li>
				<Divider />
				<li>
					<GoToPostItem
						post={props.post}
					/>
				</li>
				<Divider />
				<li>
					<DisabledItem>
						Share to...
					</DisabledItem>
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
					<DisabledItem>
						Embed
					</DisabledItem>
				</li>
				<Divider />
				<li
					className='md:hidden'
				>
					<button
						className='active:bg-neutral-200 dark:active:bg-neutral-900/25 w-full p-3 disabled:text-neutral-500/50 disabled:active:bg-transparent dark:disabled:bg-transparent'
						disabled
					>
						About this account
					</button>
				</li>
				<Divider
					className='md:hidden'
				/>
				<li>
					<button
						onClick={props.onClose}
						className='active:bg-neutral-200 dark:active:bg-neutral-900/25 w-full p-3 disabled:text-neutral-500/50 disabled:active:bg-transparent dark:disabled:bg-transparent'
					>
						Cancel
					</button>
				</li>
			</menu>
		</NativeDialog>
	);
};


export default Dialog; //Export main component
