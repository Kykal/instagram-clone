//Typings
type DisabledDangerItem = {
	children: string;
}


//Main component content
const DisabledDangerItem = (props: DisabledDangerItem): JSX.Element => {
	//Main component render
	return (
		<button
			className='active:bg-neutral-200 dark:active:bg-neutral-900/25 w-full p-3 font-medium text-red-500 disabled:text-red-500/50 disabled:active:bg-transparent dark:disabled:bg-transparent'
			disabled
		>
			{props.children}
		</button>
	);
};


export default DisabledDangerItem; //Export main component
