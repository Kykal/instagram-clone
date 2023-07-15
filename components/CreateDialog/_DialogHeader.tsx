//MATERIAL DESIGN
//Components
import IconButton	from "../UI/IconButton";
import Divider		from "../UI/Divider";
//Icons
import {
	MdClose,
} from 'react-icons/md';


//Typings
type DialogHeader = {
	onClose: () => void;
}

//Main component content
const DialogHeader = ({onClose}: DialogHeader): JSX.Element => {
	//Main component render
	return (
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
	);
};


export default DialogHeader; //Export main component
