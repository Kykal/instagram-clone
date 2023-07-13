//React
import { HTMLAttributes } from 'react';


//Typings
export type ListItem = HTMLAttributes<HTMLLIElement> & {
	children: any;
	onClick?: () => void;
}


//Main component content
const ListItem = (props: ListItem): JSX.Element => {

	const { children, onClick, className, ...propsAttributes } = props;

	//Main component render
	return (
		<li
			className='list-item'
			{...propsAttributes}
			onClick={onClick}
		>
			{children}
		</li>
	);
};


export default ListItem; //Export main component
