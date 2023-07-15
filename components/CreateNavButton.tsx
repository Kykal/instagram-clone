//React
import useDisclosure from "@/hooks/useDisclosure";


//MATERIAL DESIGN
//Icons
//Icons
import {
	BsPlusSquare,
	BsPlusSquareFill,
} from 'react-icons/bs';


//Components
import NavButton from "./NavButton";
import CreateDialog from "./CreateDialog";


//Main component content
const CreateNavButton = (): JSX.Element => {

	//React
	const [ isOpen, { open, close } ] = useDisclosure();

	const icon = isOpen ? <BsPlusSquareFill className='text-2xl' /> : <BsPlusSquare className='text-2xl' />;

	//Main component render
	return (
		<>
			<NavButton
				icon={icon}
				onClick={open}
			>
				Create
			</NavButton>
			<CreateDialog
				open={isOpen}
				onClose={close}
			/>
		</>
	);
};


export default CreateNavButton; //Export main component
