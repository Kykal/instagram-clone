//React
import { ChangeEvent, FormEvent, useState } from "react";


//Components
import SearchIcon from "./_SearchIcon";
import ResetButton from "./_ResetButton";
import Input from "./_Input";


//Main component content
const SearchInput = (): JSX.Element => {

	//React
	const [ value, setValue ] = useState<string>('');


	//Handlers
	const valueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const resetValueHandler = () => {
		setValue('');
	};

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};


	//Main component render
	return (
		<form
			onSubmit={submitHandler}
			className='flex h-full grow md:py-2 md:grow md:px-1.5 bg-neutral-100 rounded-md flex-row-reverse dark:bg-neutral-800'
		>
			{value.length !== 0 && (
				<ResetButton
					onClick={resetValueHandler}
				/>
			)}
			<Input
				value={value}
				onChange={valueHandler}
			/>
			<SearchIcon />
		</form>
	);
};


export default SearchInput; //Export main component
