//MATERIAL DESIGN
//Icons
import {
	LiaPhotoVideoSolid,
} from 'react-icons/lia';


//Main component content
const DialogBody = (): JSX.Element => {
	//Main component render
	return (
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
				Drag photos and videos here
			</span>
			<button
				className='bg-sky-500 text-sm rounded-md px-4 py-2 text-white font-medium active:bg-sky-700'
				title='Select from computer'
				aria-label='Select from computer'
			>
				Select from computer
			</button>
		</main>
	);
};


export default DialogBody; //Export main component
