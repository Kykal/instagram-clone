//NextJS
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation"; 


//Typings
type IconAnchorButton = {
	href: string;
	activeIcon: JSX.Element;
	children: JSX.Element;
};


//Main component content
const IconAnchorButton = (props: IconAnchorButton): JSX.Element => {

	const pathname = usePathname();

	const isActive = props.href === pathname ;

	const icon = isActive
		? props.activeIcon
		: props.children
	;


	//Main component render
	return (
		<Link
			href={props.href}

			data-active={isActive}
			className='px-3 py-3 block group z-40'
		>
			{icon}
		</Link>
	);
};


export default IconAnchorButton; //Export main component