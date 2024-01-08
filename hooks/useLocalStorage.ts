//NextJS
'use client';


//ReactJS
import { useState } from "react";


const useLocalStorage = () => {
	const [ data, setData ] = useState<Storage>(localStorage);


	const _newStateData = (key: string, value: string) => {
		const newData = {
			...data,
			[key]: value,
		};

		return newData;
	};
	
	const setItem = (key: string, value: string) => {
		const newData = _newStateData(key, value);


		setData(newData);
		localStorage.setItem(key, value);
	};



	return {
		data,
		setItem,
	};
};


export default useLocalStorage;
