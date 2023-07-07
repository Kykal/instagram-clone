//React
import { useState } from 'react';


const useDisclosure = () => {
	//React
	const [ isOpen, setIsOpen ] = useState<boolean>(false);

	//Handlers
	const close = () => {
		setIsOpen(false);
	}

	const open = () => {
		setIsOpen(true);
	}

	const toggle = () => {
		if( isOpen ){
			setIsOpen(false);
			return;
		}

		setIsOpen(true);
	}


	return [
		isOpen,
		{
			open,
			close,
			toggle,
		}
	] as const;
}

export default useDisclosure;
