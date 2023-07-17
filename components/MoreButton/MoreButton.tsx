//NextJS
import { usePathname } from 'next/navigation';


//React
import useDisclosure from '@/hooks/useDisclosure';
import { useEffect } from 'react';


//MATERIAL DESIGN
//Icons
import {
	MdMenu,
} from 'react-icons/md';


//Components
import MenuPortal from './_MorePortal';


//Typings
type MoreButton = {
	activeSection: string;
}
type MoreOptionsMenu = {
	isOpen: boolean;
}


//Main component content
const MoreButton = ({activeSection}: MoreButton): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	
	//React
	const [ isOpen, { close, toggle } ] = useDisclosure();
	

	useEffect( () => {
		close();
	}, [pathname] );


	//Main component render
	return (
		<>
			<button
				className='nav-item navbar-more-options'
				onClick={toggle}
				data-is-active={isOpen}
			>
				<MdMenu className='text-2xl' />
				{!Boolean(activeSection) && (
					<span
						className='nav-item__label'
					>
						More
					</span>
				)}
			</button>
			<MenuPortal
				opened={isOpen}
				onClose={close}
			/>
		</>
	);
};


export default MoreButton; //Export main component
