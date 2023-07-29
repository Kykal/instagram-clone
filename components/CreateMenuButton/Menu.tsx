//MATERIAL DESIGN
//Icons
import {
	BsGrid3X3,
} from 'react-icons/bs';
import {
	MdAddCircleOutline,
} from 'react-icons/md';



//Main component content
const Menu = (): JSX.Element => {
	//Main component render
	return (
		<div
			className='create-menu__container absolute top-14 right-4 z-50 w-28 '
		>
			<menu
				className='create-menu flex flex-col gap bg-white dark:bg-neutral-800 rounded-md shadow-md'
			>
				<li
					className='create-menu__item-list flex justify-between items-center p-3'
					role='button'
				>
					<span
						className='text-sm'
					>
						Post
					</span>
					<BsGrid3X3 />
				</li>
				<li
					className='create-menu__item-list flex justify-between items-center p-3'
					role='button'
				>
					<span
						className='text-sm'
					>
						Story
					</span>
					<MdAddCircleOutline />
				</li>
			</menu>
		</div>
	);
};


export default Menu; //Export main component
