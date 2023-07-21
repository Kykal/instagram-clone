//Components

import Dialog from "@/layouts/Dialog";


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
			title='Report a problem'
		>
			a
		</Dialog>
	);
};


export default ReportDialog; //Export main component
