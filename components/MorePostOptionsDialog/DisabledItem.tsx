//Typings
type DisabledItem = {
	children: string;
}


//Main component content
const DisabledItem = (props: DisabledItem): JSX.Element => {
	//Main component render
	return (
		<button
			className='active:bg-neutral-200 dark:active:bg-neutral-900/25 w-full p-3 disabled:text-neutral-500/50 disabled:active:bg-transparent dark:disabled:bg-transparent'
			disabled
		>
			{props.children}
		</button>
	);
};


export default DisabledItem; //Export main component
