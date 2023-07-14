//React
import { HTMLAttributes } from "react";


//Typings
export type IconButton = HTMLAttributes<HTMLButtonElement> & {
	children: JSX.Element;
	onClick: () => void;

	className?: string;
}


//Main component content
const IconButton = (props: IconButton): JSX.Element => {

	const { className, onClick, children, ...componentProps } = props;

	
	const baseClassName = 'peer icon-button';

	const _className = className
		? `${props.className} ${baseClassName}`
		: baseClassName;


	//Main component render
	return (
		<button
			className={_className}
			onClick={onClick}
			{...componentProps}
		>
			{children}
		</button>
	);
};


export default IconButton; //Export main component
