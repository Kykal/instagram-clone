//Typings
type Actions = {
	value: string;
}


//Main component content
const Actions = (props: Actions): JSX.Element => {

	
	//Main component render
	return (
		<menu
			className='flex items-center justify-between'
		>
			<li>
				<SendReportButton
					value={props.value}
				/>
			</li>
			<li>
				<AddFileButton />
			</li>
		</menu>
	);
};


export default Actions; //Export main component


const SendReportButton = (props: Actions) => {

	const background = 'bg-sky-500 disabled:bg-sky-600/40 dark:disabled:bg-sky-600/40';
	const text = 'text-white disabled:text-neutral-200 dark:disabled:text-neutral-200/75';

	return(
		<button
			className={`px-3 py-1 rounded-md ${background} ${text} disabled:cursor-not-allowed`}
			disabled={props.value.length === 0}
		>
			Send report
		</button>
	);
}


const AddFileButton = () => {

	const background = 'bg-neutral-200 dark:bg-neutral-600';
	const text = 'text-black dark:text-white';


	return(
		<button
			className={`px-3 py-1 rounded-md ${background} ${text}`}
		>
			Add file
		</button>
	);
}
