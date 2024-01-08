//NextJS
'use client';


//ReactJS
import { useState } from "react";

/**
 * To manage open/close states
 * @param initialValue 
 * @returns 
 */
const useDisclosure = (initialValue?: boolean) => {
	const [ opened, setOpened ] = useState<boolean>(initialValue || false);


	const open = () => {
		setOpened(true);
	};


	const close = () => {
		setOpened(false);
	};


	const toggle = () => {
		if(opened){
			close();
		}

		open();
	};


	return {
		opened,
		open,
		close,
		toggle,
	};
};


export default useDisclosure;
