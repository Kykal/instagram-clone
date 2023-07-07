//MATERIAL DESIGN
//Components
import ListItem from "../ui/ListItem";
//Icons
import {
	VscReport,
} from 'react-icons/vsc';


//Main component content
const ReportButton = (): JSX.Element => {
	//Main component render
	return (
		<ListItem
			icon={ <VscReport /> }
		>
			Report issue
		</ListItem>
	);
};


export default ReportButton; //Export main component
