//React
import useDisclosure from "@/hooks/useDisclosure";


//MATERIAL DESIGN
//Components
import IconButton from "./UI/IconButton";
//Icons
import {
	BsPlusSquare,
	BsPlusSquareFill,
} from 'react-icons/bs';


//Components
import CreateDialog from "./CreateDialog";


//Main component content
const CreateNavIconButton = () => {

	//React
	const [ isOpen, {open, close} ] = useDisclosure();

	return(
		<>
			<IconButton
				className={`h-full border border-transparent`}
				onClick={open}
			>
				{isOpen ? (
					<BsPlusSquareFill className='text-2xl' />
				) : (
					<BsPlusSquare className='text-xl' />
				)}
			</IconButton>
			<CreateDialog
				open={isOpen}
				onClose={close}
			/>
		</>
	);
}


export default CreateNavIconButton; //Export main component
