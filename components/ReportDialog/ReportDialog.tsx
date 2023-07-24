//React
import { ChangeEvent, useState, useEffect } from 'react';


//Layouts
import Dialog from "@/layouts/Dialog";


//Components
import Actions from "./_Actions";
import ReportTextaArea from './_ReportTextaArea';


//Typings
type ReportDialog = {
	isOpen: boolean;
	onClose: () => void;
}


//Main component content
const ReportDialog = ({isOpen, onClose}: ReportDialog): JSX.Element => {

	//React
	const [ value, setValue ] = useState<string>('');

	
	//Handlers
	const valueHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setValue(event.target.value);
	};


	//Main component render
	return (
		<Dialog
			open={isOpen}
			onClose={onClose}
			title='Report a problem'
		>
			<div
				className='flex flex-col grow p-2 gap-4'
			>
				<ReportTextaArea
					value={value}
					onChange={valueHandler}
				/>
				<Actions
					value={value}
				/>
				<p
					className='text-neutral-400 text-xs'
				>
					Your Instagram username and browser information will be automatically included in your report.
				</p>
			</div>
		</Dialog>
	);
};


export default ReportDialog; //Export main component
