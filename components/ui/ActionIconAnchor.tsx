//NextJS
import Link from "next/link";
import { usePathname } from "next/navigation";


//Typings
export type ActionIconAnchor = {
	children: JSX.Element;
	href: string;
	activeIcon?: JSX.Element;
	disableActiveIcon?: boolean;
}


//Main component content
const ActionIconAnchor = (props: ActionIconAnchor): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	const isActive = pathname === props.href;


	const dynamicIcon = isActive ? props.activeIcon : props.children;


	//Main component render
	return (
		<Link
			href={props.href}
			className='aspect-square h-full p-1 hover:bg-neutral-100 flex items-center justify-center rounded-md'
		>
			{props.disableActiveIcon ? props.children : dynamicIcon}
		</Link>
	);
};


export default ActionIconAnchor; //Export main component
