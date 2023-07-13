//NextJS
import Link from "next/link";


//React
import { HTMLAttributes } from 'react';


//Typings
export type ListItemAnchor = HTMLAttributes<HTMLAnchorElement> & {
	children: any;
	href: string;
}


//Main component content
const ListItemAnchor = (props: ListItemAnchor): JSX.Element => {

	const { children, href, className, ...propsAttributes } = props;


	//Main component render
	return (
		<li
			className='list-item'
		>
			<Link
				href={href}
				{...propsAttributes}
			>
				{children}
			</Link>
		</li>
	);
};


export default ListItemAnchor; //Export main component
