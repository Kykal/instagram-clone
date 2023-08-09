//React
import useDisclosure from "@/hooks/useDisclosure";


//MATERIAL DESIGN
//Components
import IconButton from "../../UI/IconButton";
//Icons
import {
	FiMoreHorizontal,
} from 'react-icons/fi';


//Models
import Post from "@/models/Post";


//Components
import MorePostOptionsDialog from "../../MorePostOptionsDialog";


//Typings
type MoreOptionsIconButton = {
	post: Post;
};


//Main component content
const MoreOptionsIconButton = (props: MoreOptionsIconButton): JSX.Element => {

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
			<MorePostOptionsDialog
				post={props.post}
				opened={opened}
				onClose={close}
			/>
		</>
	);
};


export default MoreOptionsIconButton; //Export main component
