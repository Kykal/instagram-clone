//React
import useDisclosure from '@/hooks/useDisclosure';


//MATERIAL DESIGN
//Icons
import {
	VscReport,
} from 'react-icons/vsc';
import ReportPortal from './_ReportPortal';


//Main component content
const ReportButton = (): JSX.Element => {

	//React
	const [ isOpen, { open, close } ] = useDisclosure();

 
	//Main component render
	return (
		<>
			<button
				className='more-menu-item'
				onClick={open}
			>
				<VscReport className='text-2xl' />
				<span>
					Report a problem
				</span>
			</button>
			<ReportPortal
				isOpen={isOpen}
				onClose={close}
			/>
		</>
	);
};


export default ReportButton; //Export main component
