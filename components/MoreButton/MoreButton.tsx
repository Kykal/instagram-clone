//NextJS
import { usePathname } from 'next/navigation';


//React
import useDisclosure from '@/hooks/useDisclosure';
import { useEffect } from 'react';


//Utils
import initTheme from '@/utils/theme/initTheme';


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


//Main component content
const MoreButton = ({activeSection}: MoreButton): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	
	//React
	const [ isOpen, { close, toggle } ] = useDisclosure();


	useEffect( () => {
		const _theme = initTheme();

		const html = document.documentElement;
		const data = 'data-theme';
		
		html.setAttribute(data, _theme);
	}, [] );


	useEffect( () => {
		close();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname] );

	
	//Main component render
	return (
		<>
			<button
				className='nav-item navbar-more-options'
				onClick={toggle}
				data-is-active={isOpen}
			>
				<MdMenu
					className='text-2xl'
					aria-label='Settings icon'
				/>
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
				closeMenu={close}
			/>
		</>
	);
};


export default MoreButton; //Export main component
