//MATERIAL DESIGN
//Components
import Divider from "../UI/Divider";
import ThisWeekHistory from "./_ThisWeekHistory";


//Layouts
import NavBarSection from "@/layouts/NavBarSection";


//Components
import TodayHistory from "./_TodayHistory";


//Main component content
const NotificationSection = (): JSX.Element => {
	//Main component render
	return (
		<NavBarSection>
			<header
				className='px-6 pt-6 pb-4 flex flex-col gap-4'
			>
				<h1
					className='font-bold text-2xl'
				>
					Notifications
				</h1>
			</header>
			<main
				className='flex flex-col gap-4'
			>
				<span
					className='px-6 text-md font-semibold'
				>
					Today
				</span>
				<TodayHistory />
				<Divider />
				<span
					className='px-6 text-md font-semibold'
				>
					This week
				</span>
				<ThisWeekHistory />
			</main>
		</NavBarSection>
	);
};


export default NotificationSection; //Export main component
