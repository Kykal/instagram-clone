import Dialog from 'native-react-dialog';


//Typings
type MoreOptionsDialog = {
	opened: boolean;
	onClose: () => void;
}


//Main component content
const MoreOptionsDialog = (props: MoreOptionsDialog): JSX.Element => {


	//Main component render
	return (
		<Dialog
			open={props.opened}
			onClose={props.onClose}
		>
			a
		</Dialog>
	);
};


export default MoreOptionsDialog; //Export main component
