//NextJS
import Link from "next/link";


//React
import { HTMLAttributes } from "react";


//Typings
type NavLink = HTMLAttributes<HTMLAnchorElement> & {
	children: string;
	href: string;

	startIcon?: JSX.Element;
}


//Main component content
const NavLink = (props: NavLink): JSX.Element => {

	const { href, children, startIcon, className, ...propsAttributes } = props;


	const _className = className
		? `${className} action-icon`
		: 'action-icon';


	//Main component render
	return (
		<Link
			href={props.href}
			className={_className}
			{...propsAttributes}
		>
			{startIcon}
			<span
				className='hidden md:block'
			>
				{children}
			</span>
		</Link>
	);
};


export default NavLink; //Export main component
