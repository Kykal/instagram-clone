//React
import { createPortal } from "react-dom";


//Components
import Dialog from "./Dialog";


//Typings
type CreateDialog = {
	open: boolean;
	onClose: () => void;
}


//Main component content
const CreateDialog = (props: CreateDialog): JSX.Element => {
	//Main component render
	return (
		<>
			{typeof window !== "undefined" && createPortal(
				<Dialog
					{...props}
				/>,
				document.body,
			)}
		</>
	);
};


export default CreateDialog; //Export main component
