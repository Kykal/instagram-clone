//React
import { createPortal } from 'react-dom';


import Dialog from 'native-react-dialog';


//Typings
type MoreOptionsDialog = {
	opened: boolean;
	onClose: () => void;
}


//Main component content
const MoreOptionsDialog = (props: MoreOptionsDialog): JSX.Element => {

	const isClient = typeof window !== "undefined";
	const target = document.body;

	
	//Main component render
	return (
		<>
			{(isClient) && createPortal(
				<_Dialog
					{...props}
				/>,
				target
			)}
		</>
	);
};


export default MoreOptionsDialog; //Export main component




const _Dialog = (props: MoreOptionsDialog) => {
	return (
		<Dialog
			open={props.opened}
			onClose={props.onClose}
		>
			a
		</Dialog>
	);
}