//React
import { createPortal } from "react-dom";


//Components
import ReportDialog from "./ReportDialog";


//Typings
type ReportPortal = {
	isOpen: boolean;
	onClose: () => void;
}


//Main component content
const ReportPortal = ({isOpen, onClose}: ReportPortal): JSX.Element | null => {
	
	const isClient = typeof window !== "undefined";
	const target = document.body;
	

	//Main component render
	return (
		<>
			{(isClient && isOpen) && createPortal(
				<ReportDialog
					isOpen={isOpen}
					onClose={onClose}
				/>,
				target,
			)}
		</>
	);
};


export default ReportPortal; //Export main component
