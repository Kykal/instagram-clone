//MATERIAL DESIGN
//Icons
import {
	BsSearch,
} from 'react-icons/bs';


//Typings
type SearchButton = {
	isActive: boolean;
	onClick: (newSection: string) => void;
}


//Main component content
const SearchButton = (props: SearchButton): JSX.Element => {

	const { isActive, onClick } = props;


	//Handlers
	const activeSearchSectionHandler = () => {
		onClick('search');
	};


	//Main component render
	return (
		<button
			className='nav-item group xl:pl-[11px] w-full border border-transparent data-[section-active=true]:border-neutral-200'
			onClick={activeSearchSectionHandler}

			data-section-active={isActive}
		>
			<BsSearch className='text-2xl min-w-[24px]' />
			<span
				className='nav-item__label group-data-[section-active=true]:hidden'
			>
				Search
			</span>
		</button>
	);
};


export default SearchButton; //Export main component
