//React
import { HTMLAttributes } from 'react';


//Typings
type Tooltip = HTMLAttributes<HTMLDivElement> & {
	children: JSX.Element;
	label: string;
}


//Main component content
const Tooltip = (props: Tooltip): JSX.Element => {

	const baseTooltipClassName = 'z-10 absolute mx-auto p-2 bg-white shadow rounded-md text-sm top-1 transition-all duration-100 left-16 scale-0 peer-hover:scale-100 origin-left';

	
	const { className, label, children, ...propsAttributes } = props;

	
	const _className = className
		? `${className} ${baseTooltipClassName}`
		: baseTooltipClassName;


	//Main component render
	return (
		<div
			className='relative'
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
