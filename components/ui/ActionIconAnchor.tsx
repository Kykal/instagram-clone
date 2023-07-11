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
	tooltip?: string;
}


//Main component content
const ActionIconAnchor = (props: ActionIconAnchor): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	const isActive = pathname === props.href;
	const { tooltip } = props;

	const baseClassName = 'peer aspect-square p-1 hover:bg-neutral-100 flex items-center justify-center rounded-md';

	const _className = props.className
		? `${props.className} ${baseClassName}`
		: baseClassName;

	const dynamicIcon = isActive ? props.activeIcon : props.children;


	//Main component render
	return (
		<div
			className='relative h-full w-full'
		>
			<Link
				href={props.href}
				className={_className}
			>
				{props.disableActiveIcon ? props.children : dynamicIcon}
			</Link>
			{tooltip && (
				<span
					className='z-10 absolute w-auto min-w-max p-2 bg-white shadow rounded-md text-sm top-1 transition-all duration-100 left-16 scale-0 peer-hover:scale-100 origin-left'
				>
					{tooltip}
				</span>
			)}
		</div>
	);
};


export default ActionIconAnchor; //Export main component
