//MATERIAL DESIGN
//Icons
import { IoMdCloseCircle } from "react-icons/io";


//Typings
type ResetButton = {
	onClick: () => void;
}


//Main component content
const ResetButton = (props: ResetButton): JSX.Element => {
	//Main component render
	return (
		<button
			className='flex items-center justify-center h-full aspect-square'
			type='button'
			onClick={props.onClick}
		>
			<IoMdCloseCircle
				className='text-neutral-400 text-md'
			/>
		</button>
	);
};


export default ResetButton; //Export main component
