//React
import { ChangeEvent } from "react";


//Typings
type Input = {
	value: string;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}


//Main component content
const Input = (props: Input): JSX.Element => {
	//Main component render
	return (
		<input
			value={props.value}
			onChange={props.onChange}

			className='grow peer focus:pl-3 md:focus:pl-2.5 bg-transparent outline-none h-full w-full'
		/>
	);
};


export default Input; //Export main component
