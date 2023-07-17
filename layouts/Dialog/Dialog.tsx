//React
import { HTMLAttributes } from 'react';


//MATERIAL DESIGN
//Components
import Divider from '@/components/UI/Divider';


//Components
import NativeDialog from 'native-react-dialog';
import DialogHeader from './_DialogHeader';


//Typings
type Dialog = HTMLAttributes<HTMLDialogElement> & {
	open: boolean;
	onClose: () => void;
	title: string;
	children?: any;
}


//Main component content
const Dialog = (props: Dialog): JSX.Element => {

	const { open, onClose, title, children, className, ...propsAttributes } = props;


	//Main component render
	return (
		<NativeDialog
			className='rounded-md p-0 container max-w-md'
			open={open}
			onClose={onClose}
			{...propsAttributes}
		>
			<DialogHeader
				title={title}
				onClose={onClose}
			/>
			<Divider />
			{children}
		</NativeDialog>
	);
};


export default Dialog; //Export main component
