//Components
import Dialog from 'native-react-dialog';


//Typings
type ReportDialog = {
	isOpen: boolean;
	onClose: () => void;
}


//Main component content
const ReportDialog = ({isOpen, onClose}: ReportDialog): JSX.Element => {
	//Main component render
	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
		>
			Hola!	
		</Dialog>
	);
};


export default ReportDialog; //Export main component
