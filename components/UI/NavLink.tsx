//NextJS
import Link from "next/link";


//Configurations
import Routes from "@/configuration/routes";


//React
import { HTMLAttributes } from "react";


//Typings
type NavLink = HTMLAttributes<HTMLAnchorElement> & {
	href: Routes;
	icon: JSX.Element;
	isSectionActive?: boolean;
	
	children?: string;
}


//Main component content
const NavLink = (props: NavLink): JSX.Element => {

	const { href, children, className, icon, isSectionActive, ...propsAttributes } = props;


	//Main component render
	return (
		<Link
			href={href}

			className='nav-item'
			data-section-active={isSectionActive}

			{...propsAttributes}
		>
			{icon}
			{!isSectionActive && (
				<span
					className='nav-item__label'
				>
					{children}
				</span>
			)}
		</Link>
	);
};


export default NavLink; //Export main component
