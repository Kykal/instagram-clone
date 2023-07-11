//NextJS
import Link from "next/link";
import { usePathname } from "next/navigation";


//Typings
export type ActionIconAnchor = {
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

	const isActive = pathname === props.href;

	const _className = props.className
		? `${props.className} aspect-square  p-1 hover:bg-neutral-100 flex items-center justify-center rounded-md`
		: 'aspect-square  p-1 hover:bg-neutral-100 flex items-center justify-center rounded-md';

	const dynamicIcon = isActive ? props.activeIcon : props.children;


	//Main component render
	return (
		<Link
			href={props.href}
			className={_className}
		>
			{props.disableActiveIcon ? props.children : dynamicIcon}
		</Link>
	);
};


export default ActionIconAnchor; //Export main component
