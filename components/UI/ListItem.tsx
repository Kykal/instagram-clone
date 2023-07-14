//React
import { HTMLAttributes } from 'react';


//Typings
export type ListItem = HTMLAttributes<HTMLLIElement> & {
	children: any;
}


//Main component content
const ListItem = (props: ListItem): JSX.Element => {

	const { children, className, ...propsAttributes } = props;

	//Main component render
	return (
		<li
			className='list-item'
			{...propsAttributes}
		>
			{children}
		</li>
	);
};


export default ListItem; //Export main component
