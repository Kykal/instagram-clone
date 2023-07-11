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
	tooltip?: string;
}


//Main component content
const ActionIcon = (props: ActionIcon): JSX.Element => {

	const { className: className, onClick, activeIcon, disableActiveIcon, children, isActive, tooltip, ...componentProps } = props;

	
	const baseClassName = 'peer aspect-square p-1 hover:bg-neutral-100 flex items-center justify-center rounded-md';


	const _className = className
		? `${props.className} ${baseClassName}`
		: baseClassName;


	const _dynamicIcon = isActive ? props.activeIcon : children;


	//Main component render
	return (
		<div
			className='relative'
		>
			<button
				className={_className}
				onClick={onClick}
				{...componentProps}
			>
				{disableActiveIcon ? children :  _dynamicIcon}

			</button>
			{tooltip && (
				<span
					className='z-10 absolute mx-auto p-2 bg-white shadow rounded-md text-sm top-1 transition-all duration-100 left-16 scale-0 peer-hover:scale-100 origin-left'
				>
					{tooltip}
				</span>
			)}
		</div>
	);
};


export default ActionIcon; //Export main component
