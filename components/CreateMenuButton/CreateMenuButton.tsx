//React
import useDisclosure from "@/hooks/useDisclosure";


//MATERIAL DESIGN
//Components
import IconButton from "../UI/IconButton";
//Icons
import {
	BsPlusSquare,
} from 'react-icons/bs';


//Components
import MenuPortal from "./MenuPortal";


//Main component content
const CreateMenuButton = (): JSX.Element => {

	//React
	const [ opened, { open, close, toggle } ] = useDisclosure();


	//Main component render
	return (
		<>
			<IconButton
				onClick={toggle}
				className='h-full z-40'
			>
				<BsPlusSquare className='text-xl' />
			</IconButton>
			{opened && (
				<MenuPortal
					close={close}
				/>
			)}
		</>
	);
};


export default CreateMenuButton; //Export main component
