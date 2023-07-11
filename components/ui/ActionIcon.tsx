//React
import { HTMLAttributes } from "react";


//Typings
export type ActionIcon = HTMLAttributes<HTMLButtonElement> & {
	children: JSX.Element;
	activeIcon?: JSX.Element;
	disableActiveIcon?: boolean;
	className?: string;
	isActive?: boolean;
	onClick: () => void;
}


//Main component content
const ActionIcon = (props: ActionIcon): JSX.Element => {

	const { className: className, onClick, activeIcon, disableActiveIcon, children, isActive, ...componentProps } = props;

	
	const baseClassName = 'peer aspect-square p-1 hover:bg-neutral-100 flex items-center justify-center rounded-md';


	const _className = className
		? `${props.className} ${baseClassName}`
		: baseClassName;


	const _dynamicIcon = isActive ? props.activeIcon : children;


	//Main component render
	return (
		<button
			className={_className}
			onClick={onClick}
			{...componentProps}
		>
			{disableActiveIcon ? children :  _dynamicIcon}

		</button>
	);
};


export default ActionIcon; //Export main component
