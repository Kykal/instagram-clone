//React
import { HTMLAttributes } from "react";


//Typings
type Divider = HTMLAttributes<HTMLHRElement>;


//Main component content
const Divider = (props: Divider): JSX.Element => {
	
	const { className: propsClassName, ...propsAttributes } = props;

	const baseClassName = 'border-t border-neutral-200';

	const _className = propsClassName
		? `${baseClassName} ${propsClassName}`
		: baseClassName;


	//Main component render
	return (
		<hr
			className={_className}
			{...propsAttributes}
		/>
	);
};


export default Divider; //Export main component
