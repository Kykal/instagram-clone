//React
import { HTMLAttributes } from 'react';


//Typings
type Tooltip = HTMLAttributes<HTMLDivElement> & {
	children: JSX.Element;
	label: string;
}


//Main component content
const Tooltip = (props: Tooltip): JSX.Element => {

	const { className, children, label, ...propsAttributes } = props;

	//Main component render
	return (
		<div
			{...propsAttributes}
			className='tooltip__container group'
		>
			{children}
			<span
				className='tooltip group-hover:block group-hover:scale-100'
			>
				{label}
			</span>
		</div>
	);
};


export default Tooltip; //Export main component
