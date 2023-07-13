//React
import useDisclosure from "@/hooks/useDisclosure";


//MATERIAL DESIGN
//Components
import ActionIcon from "../UI/ActionIcon";
//Icons
import {
	BsPlusSquare,
	BsPlusSquareFill,
} from 'react-icons/bs';


//Components
import CreateDialog from "./_CreateDialog";


//Main component content
const CreateNavLink = () => {

	//React
	const [ isOpen, {open, close} ] = useDisclosure();


	return(
		<>
			<ActionIcon
				className={`h-full border border-transparent`}
				activeIcon={<BsPlusSquareFill className='text-2xl' />}
				isActive={isOpen}
				onClick={open}
			>
				<BsPlusSquare className='text-xl' />
			</ActionIcon>
			<CreateDialog
				open={isOpen}
				onClose={close}
			/>
		</>
	);
}


export default CreateNavLink; //Export main component
