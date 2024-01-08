//Components
import Appbar from "@/components/Appbar";
import BottomNavigation from "@/components/BottomNavigation";
import GoBackButton from "@/components/GoBackButton";

//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<>
			<Appbar>
				<div
					className='w-full h-full relative center'
				>
					<GoBackButton
						className='absolute left-3'
					/>
					<h1
						className='text-neutral-800 font-medium'
					>
						Notifications
					</h1>
				</div>
			</Appbar>
			<BottomNavigation />
		</>
	);
};


export default Page; //Export main component
