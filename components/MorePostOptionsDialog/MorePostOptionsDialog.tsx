//React
import { createPortal } from 'react-dom';


//Components
import Dialog from './Dialog';


//Models
import Post from '@/models/Post';


//Typings
type MorePostOptionsDialog = {
	opened: boolean;
	onClose: () => void;
	post: Post;
}


//Main component content
const MorePostOptionsDialog = (props: MorePostOptionsDialog): JSX.Element => {

	const isClient = typeof window !== "undefined";
	const target = document.body;


	//Main component render
	return (
		<>
			{(isClient) && createPortal(
				<Dialog
					{...props}
				/>,
				target
			)}
		</>
	);
};


export default MorePostOptionsDialog; //Export main component
