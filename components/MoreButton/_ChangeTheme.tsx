//React
import { useEffect, useState } from 'react';


//MATERIAL DESIGN
//Icons
import { Theme } from '@/utils/theme/typings';
import {
	BsSun,
	BsMoon,
} from 'react-icons/bs';
import getTheme from '@/utils/theme/getTheme';


//Typings
type ChangeTheme = {
	onClick: () => void;
}


//Main component content
const ChangeTheme = (props: ChangeTheme): JSX.Element => {

	//React
	const [ theme, setTheme ] = useState<Theme>('light');

	useEffect( () => {
		const _theme = getTheme();

		setTheme(_theme);
	}, [] );

	const dynamicIcon = theme === 'light'
		?	<BsSun className='text-2xl' />
		: <BsMoon className='text-2xl' />;

		
	//Main component render
	return (
		<button
			className='more-menu-item'
			onClick={props.onClick}
		>
			{dynamicIcon}
			<span>
				Switch appearance
			</span>
		</button>
	);
};


export default ChangeTheme; //Export main component
