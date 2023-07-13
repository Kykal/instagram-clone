//NextJS
'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";


//React
import { HTMLAttributes } from 'react';


//Typings
export type ActionIconAnchor = HTMLAttributes<HTMLAnchorElement> & {
	children: JSX.Element | string;
	href: string;
	activeIcon?: JSX.Element;
	disableActiveIcon?: boolean;
	className?: string;
}


//Main component content
const ActionIconAnchor = (props: ActionIconAnchor): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	const { href, className, activeIcon, disableActiveIcon, children, ...propsAttributes } = props;
	
	const isActive = pathname === props.href;



	const baseClassName = 'peer aspect-square p-1 hover:bg-neutral-100 flex items-center justify-center rounded-md';

	const _className = className
		? `${className} ${baseClassName}`
		: baseClassName;

	const dynamicIcon = isActive ? activeIcon : children;


	//Main component render
	return (
		<Link
			href={props.href}
			className={_className}
			{...propsAttributes}
		>
			{props.disableActiveIcon ? props.children : dynamicIcon}
		</Link>
	);
};


export default ActionIconAnchor; //Export main component
