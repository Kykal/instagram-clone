//NextJS
'use client';
import { usePathname } from "next/navigation";


//React
import { useState, useEffect } from "react";


//Components
import MobileNavBar from "./_MobileNavBar";
import TabletNavBar from "./_TabletNavBar";
import DesktopNavBar from "./_DesktopNavBar";
import SearchActiveItemSect from "./SearchActiveItemSect";
import NotificationsActiveItemSection from "./NotificationsActiveItemSection";


//Main component content
const NavBar = (): JSX.Element => {

	//React
	const [ activeItem, setActiveItem ] = useState<string>('');
	const pathname = usePathname();

	//When pathname updates, reset active navbar item
	useEffect( () => {
		setActiveItem('');
	}, [pathname] );


	//Handlers
	//Active navbar item toggler
	const setItemHandler = (item: string) => {
		if( activeItem === item ){
			setActiveItem('');
			return;
		}

		setActiveItem(item);
	};

	//Main component render
	return (
		<>
			<MobileNavBar />
			<TabletNavBar
				setItem={setItemHandler}
				activeItem={activeItem}
			/>
			{!activeItem && (
				<DesktopNavBar
					setItem={setItemHandler}
					activeItem={activeItem}
				/>
			)}
			{activeItem === 'search' && (
				<SearchActiveItemSect />
			)}
			{activeItem === 'notifications' && (
				<NotificationsActiveItemSection />
			)}
		</>
	);
};


export default NavBar; //Export main component
