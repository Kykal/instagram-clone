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
import NavButton from "../NavButton";
import CreateDialog from "../CreateDialog/CreateDialog";


//Typings
type CreateNavButton = {
	activeSection: string;
}


//Main component content
const CreateNavButton = (props: CreateNavButton): JSX.Element => {

	//React
	const [ isOpen, { open, close } ] = useDisclosure();

	const buttonStyles = 'text-2xl aspect-square min-h-[24px] min-w-[24px]';

	const icon = isOpen ? <BsPlusSquareFill className={buttonStyles} /> : <BsPlusSquare className={buttonStyles} />;


	//Main component render
	return (
		<>
			<NavButton
				icon={icon}
				onClick={open}

				activeSection={props.activeSection}
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
