//NextJS
'use client';
import { usePathname } from "next/navigation";


//React
import { useState, useEffect } from "react";


//Configurations
import NavBarSections from "@/configuration/navBarSections";
import Routes from "@/configuration/routes";


//Components
import InstagramLogo from "./InstagramLogo";
import NavList from "./NavList";


//Main component content
const NavBar = (): JSX.Element => {

	//NextJS
	const pathname = usePathname();


	//React
	const [ activeSection, setActiveSection ] = useState<NavBarSections | string>('');


	//Handlers
	const activeSectionHandler = (newSection: string) => {
		if( activeSection === newSection ){
			setActiveSection('');
			return;
		}
		
		setActiveSection(newSection);
	};


	useEffect( () => {
		if( pathname === Routes.MESSAGES ){
			setActiveSection(NavBarSections.MESSAGES);
			return;
		}

		setActiveSection('');
	}, [pathname] );


	//Main component render
	return (
		<nav
			className='main-navigation'
		>
			<InstagramLogo
				activeSection={activeSection}
			/>
			<NavList
				activeSection={activeSection}
				activeSectionHandler={activeSectionHandler}
			/>
		</nav>
	);
};


export default NavBar; //Export main component
