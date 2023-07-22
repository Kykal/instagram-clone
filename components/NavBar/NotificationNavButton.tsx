//Configurationss
import NavBarSections from '@/configuration/navBarSections';

//MATERIAL DESIGN
//Icons
import {
	BsHeart,
	BsHeartFill,
} from 'react-icons/bs';


//Typings
type NotificationNavButton = {
	onClick: (newSection: string) => void;
	activeSection: string;
}


//Main component content
const NotificationNavButton = ({onClick, activeSection}: NotificationNavButton): JSX.Element => {

	const isNotificationSectionActive = activeSection === NavBarSections.NOTIFICATIONS;


	const icon = isNotificationSectionActive ? <BsHeartFill className='text-2xl' /> : <BsHeart className='text-2xl'  /> ;

	//Handlers
	const activeNotificationsSectionHandler = () => {
		onClick(NavBarSections.NOTIFICATIONS);
	};
	
	//Main component render
	return (
		<button
			className={`nav-item nav-button ${isNotificationSectionActive ? 'border-neutral-200' : 'border-transparent'}`}
			onClick={activeNotificationsSectionHandler}

			data-section-active={Boolean(activeSection)}
		>
			{icon}
			{!Boolean(activeSection) && (
				<span
					className='nav-item__label'
				>
					Notifications
				</span>
			)}
		</button>
	);
};


export default NotificationNavButton; //Export main component
