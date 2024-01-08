//NextJS
'use client';


import Menu from "@/components/ui/Menu";
//ReactJS
import useDisclosure from "@/hooks/useDisclosure";


//MATERIAL DESIGN
//Icons
import { FaRegSquarePlus } from "react-icons/fa6";


//Main component content
const CreateMenuButton = (): JSX.Element => {

	const { opened, open, close, } = useDisclosure();


	//Main component render
	return (
		<>
			<button
				className='group block'

				onClick={open}
			>
				<FaRegSquarePlus className='transiton-all aspect-square text-2xl group-hover:scale-110' />
			</button>
			{opened && (
				<Menu>
					a
				</Menu>
			)}
		</>
	);
};


export default CreateMenuButton; //Export main component
