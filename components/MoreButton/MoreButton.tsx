//NextJS
import { usePathname } from 'next/navigation';


//React
import useDisclosure from '@/hooks/useDisclosure';
import { useState, useEffect } from 'react';


//Utils
import initTheme from '@/utils/theme/initTheme';
import setLocalStorageTheme from '@/utils/theme/setTheme';


//MATERIAL DESIGN
//Icons
import {
	MdMenu,
} from 'react-icons/md';


//Components
import MenuPortal from './_MorePortal';
import { Theme } from '@/utils/theme/typings';


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
	const [ theme, setTheme ] = useState<Theme>('light');


	
	useEffect( () => {
		const html = document.documentElement;
		const data = 'data-theme';
		const _theme = initTheme();
		
		html.setAttribute(data, _theme);
		setTheme(_theme);
	}, [] );


	useEffect( () => {
		close();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname] );


	//Handlers
	const toggleThemeHandler = () => {
		const html = document.documentElement;
		const data = 'data-theme';
		
		if(theme === 'light'){

			const newValue = 'dark';

			setTheme(newValue);
			setLocalStorageTheme(newValue);
			html.setAttribute(data, newValue);
			return;
		}

		const newValue = 'light';

		setTheme(newValue);
		setLocalStorageTheme(newValue);
		html.setAttribute(data, newValue);
	};
	
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
				theme={theme}
				toggleTheme={toggleThemeHandler}
			/>
		</>
	);
};


export default MoreButton; //Export main component
