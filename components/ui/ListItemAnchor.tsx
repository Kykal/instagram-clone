//NextJS
import { usePathname } from 'next/navigation';
import Link from "next/link";


//Typings
export type ListItemAnchor = {
	children: any;
	icon?: JSX.Element;
	activeIcon?: JSX.Element;
	href: string;
	dynamicIcon?: boolean;

	disableActiveIcon?: boolean;
}


//Main component content
const ListItemAnchor = (props: ListItemAnchor): JSX.Element => {

	//NextJS
	const pathname = usePathname();

	const isActive = props.href === pathname;

	const _dynamicIcon = isActive ? props.activeIcon : props.icon;
	
	
	//Main component render
	return (
		<li
			className='list-item'
			data-active={isActive}
		>
			<Link
				href={props.href}
			>
				{props.disableActiveIcon ? props.icon : _dynamicIcon}
				<span
					className='grow'
				>
					{props.children}
				</span>
			</Link>
		</li>
	);
};


export default ListItemAnchor; //Export main component
