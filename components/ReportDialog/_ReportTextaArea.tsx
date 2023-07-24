//React
import { ChangeEvent } from 'react';


//Typings
type ReportTextaArea = {
	value: string;
	onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}


//Main component content
const ReportTextaArea = (props: ReportTextaArea): JSX.Element => {
	//Main component render
	return (
		<textarea
			className='w-full bg-neutral-800 border border-neutral-600 p-2 placeholder:text-neutral-600 outline-none'

			placeholder='Please include as much info as possible...'

			value={props.value}
			onChange={props.onChange}

			rows={5}
		/>
	);
};


export default ReportTextaArea; //Export main component
