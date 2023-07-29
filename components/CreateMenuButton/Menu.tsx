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
			className='create-menu__container'
		>
			<menu
				className='create-menu'
			>
				<li
					className='create-menu__item-list'
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
					className='create-menu__item-list'
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
