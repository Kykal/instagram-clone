//React
import { useState } from "react";
import { createPortal } from "react-dom";


//MATERIAL DESIGN
//Components
import ActionIcon from "../material/ActionIcon";
import Divider from "../UI/Divider";
//Icons
import {
	BsPlusSquare,
	BsPlusSquareFill,
} from 'react-icons/bs';
import {
	LiaPhotoVideoSolid,
} from 'react-icons/lia';
import {
	MdClose,
} from 'react-icons/md';


//Components
import Dialog from 'native-react-dialog';


//Typings
type CreateActionIconDialog = {
	
}


//Main component content
const CreateActionIconDialog = () => {

	//React
	const [ isOpen, setIsOpen ] = useState<boolean>(false);

	//Handlers
	const openHandler = () => {
		setIsOpen(true);
	};

	const closeHandler = () => {
		setIsOpen(false);
	};

	return(
		<>
			<ActionIcon
				className={`w-full border border-transparent`}
				activeIcon={<BsPlusSquareFill className='text-2xl' />}
				isActive={isOpen}
				onClick={openHandler}
			>
				<BsPlusSquare className='text-2xl' />
			</ActionIcon>
			{typeof window !== "undefined" && createPortal(
				<Dialog
					open={isOpen}
					onClose={closeHandler}
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
						<ActionIcon
							onClick={closeHandler}
							className='absolute right-4 top-2'
							title='Close create dialog'
							aria-label='Close create dialog button'
							aria-description='Closes actual dialog'
						>
							<MdClose
								className='fill-neutral-400 text-xl'
								aria-label='Close icon'
							/>
						</ActionIcon>
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
}


export default CreateActionIconDialog; //Export main component
