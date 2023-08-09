//MATERIAL DESIGN
//Icons
import {
	BsSun,
	BsMoon,
} from 'react-icons/bs';


//Typings
import Theme from '@/typings/theme';
type ChangeTheme = {
	onClick: () => void;
	theme: Theme;
	toggleTheme: () => void;
}


//Main component content
const ChangeTheme = (props: ChangeTheme): JSX.Element => {

	const dynamicIcon = props.theme === 'light'
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
