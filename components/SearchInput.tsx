//NextJS
'use client';


//React
import { ChangeEvent, FormEvent, useState } from "react";


//MATERIAL DESIGN
//Components
//Icons
import {
	BsSearch,
} from 'react-icons/bs';
import {
	IoMdCloseCircle,
} from 'react-icons/io';


//Typings
type SearchInput = {
	className?: string;
}

const SearchInput = (props: SearchInput) => {

	//React
	const [ value, setValue ] = useState<string>('');


	//Handlers
	const valueHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	const cleanValueHandler = () => {
		setValue('');
	};

	const submitHandler = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};


	const _className = props.className
		? `${props.className} group rounded-md bg-neutral-100 grow flex items-center flex-row-reverse`
		: 'group rounded-md bg-neutral-100 grow flex items-center flex-row-reverse';

	return(
		<form
			className={_className}
			onSubmit={submitHandler}
		>
			{value.length !== 0 && (
				<button
					className='flex items-center justify-center h-full aspect-square'
					type='button'
				onClick={cleanValueHandler}
				>
					<IoMdCloseCircle
						className='text-neutral-400 text-md'
					/>
				</button>
			)}
			<input
				type="text"
				className='peer w-full h-full grow bg-transparent outline-none px-2'

				value={value}
				onChange={valueHandler}
			/>
			<div
				className='flex peer-focus:hidden items-center justify-center h-full aspect-square'
			>
				<BsSearch
					className='text-neutral-400 text-md'
				/>
			</div>
		</form>
	);
}


export default SearchInput;
