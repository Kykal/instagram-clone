//MATERIAL DESIGN
//Icons
import {
	BsSearch,
} from 'react-icons/bs';


//Typings
type SearchButton = {
	onClick: (newSection: string) => void;
	activeSection: string;
}


//Main component content
const SearchButton = (props: SearchButton): JSX.Element => {

	const { activeSection, onClick } = props;


	//Handlers
	const activeSearchSectionHandler = () => {
		onClick('search');
	};


	const isSearchSectionActive = activeSection === 'search';

	
	//Main component render
	return (
		<button
			className={`nav-item nav-button ${isSearchSectionActive ? 'border-neutral-200' : 'border-transparent'}`}
			onClick={activeSearchSectionHandler}

			data-section-active={Boolean(activeSection)}
		>
			<BsSearch className='text-2xl min-w-[24px]' />
			{!Boolean(activeSection) && (
				<span
					className='nav-item__label'
				>
					Search
				</span>
			)}
		</button>
	);
};


export default SearchButton; //Export main component
