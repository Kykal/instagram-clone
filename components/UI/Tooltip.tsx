//React
import { HTMLAttributes } from 'react';


//Typings
type Tooltip = HTMLAttributes<HTMLDivElement> & {
	children: JSX.Element;
	label: string;
}


//Main component content
const Tooltip = (props: Tooltip): JSX.Element => {

	const zIndex = 'z-10';
	const position = 'absolute left-16 top-1'
	const width = 'w-auto min-w-max';
	const padding = 'p-2';
	const margin = 'mx-auto';
	const border = 'rounded-md shadow';
	const animation = 'transition-all duration-100 scale-0 peer-hover:scale-100 origin-left';
	const background = 'bg-white';
	const text = 'text-sm';

	const baseTooltipClassName = `${zIndex} ${position} ${width} ${padding} ${margin} ${border} ${animation} ${background} ${text}`;


	const { className, label, children, ...propsAttributes } = props;

	
	const _className = className
		? `${className} ${baseTooltipClassName}`
		: baseTooltipClassName;


	//Main component render
	return (
		<div
			className='tooltip relative'
			{...propsAttributes}
		>
			{children}
			<span
				className={_className}
			>
				{label}
			</span>
		</div>
	);
};


export default Tooltip; //Export main component
