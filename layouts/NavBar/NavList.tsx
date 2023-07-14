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
				className={`navigation-list ${Boolean(activeSection) ? 'w-12' : 'md:w-12 xl:w-56'}`}
			>
				<li
					className='navigation-list___item'
				>
					<HomeAnchorNavLink
						isSectionActive={Boolean(activeSection)}
					/>
				</li>
				<li
					className='hidden md:block navigation-list___item'
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
