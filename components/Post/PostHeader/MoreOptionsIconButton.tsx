//React
import useDisclosure from "@/hooks/useDisclosure";


//MATERIAL DESIGN
//Components
import IconButton from "../../UI/IconButton";
//Icons
import {
	FiMoreHorizontal,
} from 'react-icons/fi';
import MoreOptionsDialog from "./MoreOptionsDialog";


//Main component content
const MoreOptionsIconButton = (): JSX.Element => {

	//React
	const [opened, { open, close }] = useDisclosure();


	//Main component render
	return (
		<>
			<IconButton
				onClick={open}
				className='h-8'
			>
				<FiMoreHorizontal className='text-lg' />
			</IconButton>
			<MoreOptionsDialog
				opened={opened}
				onClose={close}
			/>
		</>
	);
};


export default MoreOptionsIconButton; //Export main component
