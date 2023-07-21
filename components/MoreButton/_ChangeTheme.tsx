//MATERIAL DESIGN
//Components
//Icons
import {
	BsSun,
} from 'react-icons/bs';


//Main component content
const ChangeTheme = (): JSX.Element => {
	//Main component render
	return (
		<>
			<button
				className='more-menu-item'
			>
				<BsSun className='text-2xl' />
				<span>
					Switch appeareance
				</span>
			</button>
		</>
	);
};


export default ChangeTheme; //Export main component
