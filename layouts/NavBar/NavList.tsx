//React
import { useState } from "react";


//Components
import HomeAnchorNavLink from "@/components/HomeAnchorNavLink";
import SearchButton from "@/components/SearchButton";
import SearchSection from "@/components/SearchSection";


//Main component content
const NavList = (): JSX.Element => {

	//React
	const [ activeSection, setActiveSection ] = useState<string>('');


	//Handlers
	const activeSearchSectionHandler = (newSection: string) => {
		if( activeSection === newSection ){
			setActiveSection('');
			return;
		}
		
		setActiveSection(newSection);
	};

	//Main component render
	return (
		<>
			<ul
				className='h-12 md:h-auto flex md:flex-col justify-evenly md:justify-center xl:justify-start md:w-12'
			>
				<li
					className='md:w-full aspect-square'
				>
					<HomeAnchorNavLink />
				</li>
				<li
					className='md:w-full aspect-square'
				>
					<SearchButton
						isActive={Boolean(activeSection)}
						onClick={activeSearchSectionHandler}
					/>
				</li>
			</ul>
			{activeSection === 'search' && (
				<SearchSection />
			)}
		</>
	);
};


export default NavList; //Export main component
