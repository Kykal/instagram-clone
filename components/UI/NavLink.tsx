//NextJS
import Link from "next/link";


//Configuration
import Routes from "@/configuration/routes";


//React
import { HTMLAttributes } from "react";


//Typings
type NavLink = HTMLAttributes<HTMLAnchorElement> & {
	href: Routes;
	icon: JSX.Element;
	
	children?: string;
}


//Main component content
const NavLink = (props: NavLink): JSX.Element => {

	const { href, children, className, icon, ...propsAttributes } = props;


	//Main component render
	return (
		<Link
			href={href}

			className='nav-item'

			{...propsAttributes}
		>
			{icon}
			<span>
				{children}
			</span>
		</Link>
	);
};


export default NavLink; //Export main component
