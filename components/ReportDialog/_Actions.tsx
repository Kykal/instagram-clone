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

	return(
		<button
			className='px-3 py-1 bg-sky-600 rounded-md disabled:bg-sky-600/50 disabled:text-neutral-200/50 disabled:cursor-not-allowed'
			disabled={props.value.length === 0}
		>
			Send report
		</button>
	);
}


const AddFileButton = () => {
	return(
		<button
			className='px-3 py-1 bg-neutral-600 rounded-md'
		>
			Add file
		</button>
	);
}
