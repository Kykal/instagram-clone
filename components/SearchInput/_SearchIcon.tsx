//MATERIAL DESIGN
//Icons
import { BsSearch } from "react-icons/bs";


//Main component content
const SearchIcon = (): JSX.Element => {
	//Main component render
	return (
		<div
			className='flex peer-focus:hidden items-center justify-center h-full aspect-square'
		>
			<BsSearch
				className='text-neutral-400 text-md'
			/>
		</div>
	);
};


export default SearchIcon; //Export main component
