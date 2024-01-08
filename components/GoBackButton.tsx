//NextJS
'use client';
import { useRouter } from 'next/navigation';
import { HTMLAttributes } from 'react';


//MATERIAL DESIGN
//Icons
import { IoChevronBack } from "react-icons/io5";


//Main component content
const GoBackButton = (props: HTMLAttributes<HTMLButtonElement>): JSX.Element => {

	const router = useRouter();

	const {
		children,
		role,
		onClick,
		...propsAttributes
	} = props;

	const onClickHandler = () => {
		router.back();
	};


	//Main component render
	return (
		<button
			role='link'
			onClick={onClickHandler}

			{...propsAttributes}
		>
			<IoChevronBack className='text-3xl text-neutral-500' />
		</button>
	);
};


export default GoBackButton; //Export main component
