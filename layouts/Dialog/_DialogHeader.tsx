//MATERIAL DESIGN
//Components
import IconButton from '@/components/UI/IconButton';
//Icons
import {
	MdClose,
} from 'react-icons/md';


//Typings
type DialogHeader = {
	onClose: () => void;
	title: string;
}

//Main component content
const DialogHeader = ({onClose, title}: DialogHeader): JSX.Element => {
	//Main component render
	return (
		<header
			className='relative p-2'
			aria-label='Header'
		>
			<h1
				className='text-center font-medium'
				title={title}
				aria-label={title}
			>
				{title}
			</h1>
			<IconButton
				onClick={onClose}
				className='absolute right-4 top-2'
			>
				<MdClose
					className='fill-neutral-400 text-xl'
					aria-description='Close icon'
				/>
			</IconButton>
		</header>
	);
};


export default DialogHeader; //Export main component
