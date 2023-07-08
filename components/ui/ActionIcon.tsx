//Typings
export type ActionIcon = {
	children: JSX.Element;
	activeIcon?: JSX.Element;
	disableActiveIcon?: boolean;
	className?: string;
	isActive?: string;
	onClick: () => void;
}


//Main component content
const ActionIcon = (props: ActionIcon): JSX.Element => {

	const { className: className, onClick, activeIcon, ...componentProps } = props;

	const _className = className
		? `${props.className} aspect-square  p-1 hover:bg-neutral-100 flex items-center justify-center rounded-md`
		: 'aspect-square  p-1 hover:bg-neutral-100 flex items-center justify-center rounded-md';


	const _dynamicIcon = props.isActive ? props.activeIcon : props.children;

	//Main component render
	return (
		<button
			className={_className}
			onClick={onClick}
			{...componentProps}
		>
			{_dynamicIcon}
		</button>
	);
};


export default ActionIcon; //Export main component
