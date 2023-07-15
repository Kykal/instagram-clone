//MATERIAL DESIGN
//Components
import Divider from "../UI/Divider";


//Components
import DialogBody from "./_DialogBody";
import DialogHeader from "./_DialogHeader";
import NativeDialog from 'native-react-dialog';


//Typings
type Dialog = {
	open: boolean;
	onClose: () => void;
}


//Main component content
const Dialog = ({open, onClose}: Dialog): JSX.Element => {
	//Main component render
	return (
		<NativeDialog
			open={open}
			onClose={onClose}
			className='rounded-md p-0 container max-w-2xl w-auto'
			aria-label='Create dialog'
			aria-description='Upload multimedia to post'
		>
			<DialogHeader
				onClose={onClose}
			/>
			<Divider
				aria-label='Divider'
				aria-description='Divides header from main'
			/>
			<DialogBody />
		</NativeDialog>
	);
};


export default Dialog; //Export main component
