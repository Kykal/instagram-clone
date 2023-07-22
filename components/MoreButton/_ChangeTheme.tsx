//MATERIAL DESIGN
//Icons
import {
	BsSun,
} from 'react-icons/bs';


//Typings
type ChangeTheme = {
	onClick: () => void;
}


//Main component content
const ChangeTheme = (props: ChangeTheme): JSX.Element => {
	//Main component render
	return (
		<button
			className='more-menu-item'
			onClick={props.onClick}
		>
			<BsSun className='text-2xl' />
			<span>
				Switch appeareance
			</span>
		</button>
	);
};


export default ChangeTheme; //Export main component
