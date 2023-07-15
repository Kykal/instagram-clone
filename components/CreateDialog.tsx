//React
import { createPortal } from "react-dom";


//MATERIAL DESIGN
//Components
import IconButton	from "./UI/IconButton";
import Divider		from "./UI/Divider";
//Icons
import {
	MdClose,
} from 'react-icons/md';
import {
	LiaPhotoVideoSolid,
} from 'react-icons/lia';


//Components
import Dialog from 'native-react-dialog';


//Typings
type CreateDialog = {
	open: boolean;
	onClose: () => void;
}


//Main component content
const CreateDialog = ({ open, onClose }: CreateDialog): JSX.Element => {
	//Main component render
	return (
		<>
			{typeof window !== "undefined" && createPortal(
				<Dialog
					open={open}
					onClose={onClose}
					className='rounded-md p-0 container max-w-2xl w-auto'
					aria-label='Create dialog'
					aria-description='Upload multimedia to post'
				>
					<header
						className='relative p-2'
						aria-label='Header'
					>
						<h1
							className='text-center font-medium'
							title='Create new post'
							aria-label='Create new post'
						>
							Create new post
						</h1>
						<IconButton
							onClick={onClose}
							className='absolute right-4 top-2'
							title='Close create dialog'
							aria-label='Close create dialog button'
							aria-description='Closes actual dialog'
						>
							<MdClose
								className='fill-neutral-400 text-xl'
								aria-label='Close icon'
							/>
						</IconButton>
					</header>
					<Divider
						aria-label='Divider'
						aria-description='Divides header from main'
					/>
					<main
						className='p-2 flex flex-col gap-2 items-center justify-center h-96'
						aria-label='Dialog main container'
					>
						<div
							className='relative flex text-8xl'
						>
							<LiaPhotoVideoSolid
								title='Pictures and videos'
								aria-label='Pictures and videos'
							/>
						</div>
						<span
							className='text-xl font-light'
							title='Drag here pictures and videos'
							aria-label='Drag here pictures and videos'
						>
							Drag here pictures and videos
						</span>
						<button
							className='bg-sky-500 text-sm rounded-md px-4 py-2 text-white font-medium active:bg-sky-700'
							title='Select from computer'
							aria-label='Select from computer'
						>
							Select from computer
						</button>
					</main>
				</Dialog>,
				document.body,
			)}
		</>
	);
};


export default CreateDialog; //Export main component
