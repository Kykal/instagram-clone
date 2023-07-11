//React
import { HTMLAttributes } from 'react';


//Typings
type Menu = HTMLAttributes<HTMLMenuElement> & {
	children?: any;
}


//Main component content
const Menu = (props: Menu): JSX.Element => {

	let _className = 'popper';

	const { className: propsClassName, ...propsAttributes } = props;
	
	if( propsClassName ){
		_className = `popper ${propsClassName}`;
	}
	
	//Main component render
	return (
		<menu
			className={_className}
			{...propsAttributes}

		>
			{props.children}
		</menu>
	);
};


export default Menu; //Export main component
