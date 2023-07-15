//MATERIAL DESIGN
//Components
import Divider from "../UI/Divider";
import ThisWeekHistory from "./_ThisWeekHistory";


//Components
import TodayHistory from "./_TodayHistory";


//Main component content
const NotificationSection = (): JSX.Element => {
	//Main component render
	return (
		<section
			className='navbar-section'
		>
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
		</section>
	);
};


export default NotificationSection; //Export main component
