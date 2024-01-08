//Components
import Appbar from "@/components/Appbar";
import CreateMenuButton from "./CreateMenuButton";
import NotificationsAnchor from "./NotificationsAnchor";


//Main component content
const Header = (): JSX.Element => {
	//Main component render
	return (
		<Appbar>
			<div
				className='flex items-center justify-between px-4 py-1.5'
			>
				<h1
					className='font-medium text-2xl italic'
				>
					Fakegram
				</h1>
				<ul
					className='flex items-center gap-1'
				>
					<li>
						<CreateMenuButton />
					</li>
					<li>
						<NotificationsAnchor />
					</li>
				</ul>
			</div>
		</Appbar>
	);
};


export default Header; //Export main component
