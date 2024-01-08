//NextJS
import Link from "next/link";


//MATERIAL DESIGN
//Icons
import {
	IoHeartOutline
} from "react-icons/io5";


//Main component content
const NotificationsAnchor = (): JSX.Element => {
	//Main component render
	return (
		<Link
			href='/notifications'

			className='group block'
		>
			<IoHeartOutline
				className='transiton-all aspect-square text-2xl group-hover:scale-110'
			/>
		</Link>
	);
};


export default NotificationsAnchor; //Export main component
