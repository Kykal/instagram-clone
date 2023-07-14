//MATERIAL DESIGN
//Icons
import {
	BsCompass,
	BsCompassFill,
} from 'react-icons/bs';

//Typings
type SearchButton = {
	isActive: boolean;
	onClick: (newSection: string) => void;
}


//Main component content
const SearchButton = (props: SearchButton): JSX.Element => {

	const { isActive, onClick } = props;


	const icon = isActive ? <BsCompassFill className='text-2xl' />: <BsCompass className='text-2xl' />


	//Handlers
	const activeSearchSectionHandler = () => {
		onClick('search');
	};

	//Main component render
	return (
		<button
			className='nav-item group w-full'
			onClick={activeSearchSectionHandler}

			data-section-active={isActive}
		>
			{icon}
			<span
				className='nav-item__label group-data-[section-active=true]:hidden'
			>
				Search
			</span>
		</button>
	);
};


export default SearchButton; //Export main component
