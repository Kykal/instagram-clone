//NextJS
import { usePathname } from "next/navigation";


//React
import { useState, useEffect } from "react";


//Components
import HomeNavLink from "@/components/HomeNavLink";
import SearchButton from "@/components/SearchButton";
import SearchSection from "@/components/SearchSection";
import ExploreNavLink from "@/components/ExploreNavLink";
import ReelsNavLink from "@/components/ReelsNavLink";
import CreateNavButton from "@/components/CreateNavButton";
import MessagesNavLink from "@/components/MessagesNavLink";
import Routes from "@/configuration/routes";


//Main component content
const NavList = (): JSX.Element => {

	//NextJS
	const pathname = usePathname();


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


	useEffect( () => {
		if( pathname === Routes.MESSAGES ){
			setActiveSection('messages');
			return;
		}

		setActiveSection('');
	}, [pathname] );
	

	//Main component render
	return (
		<>
			<ul
				className={`navigation-list ${Boolean(activeSection) ? 'md:w-12' : 'md:w-12 xl:w-80'}`}
			>
				<li
					className='navigation-list__item'
				>
					<HomeNavLink
						isSectionActive={Boolean(activeSection)}
					/>
				</li>
				<li
					className='hidden md:block navigation-list__item'
				>
					<SearchButton
						activeSection={activeSection}
						onClick={activeSearchSectionHandler}
					/>
				</li>
				<li
					className='navigation-list__item'
				>
					<ExploreNavLink
						isSectionActive={Boolean(activeSection)}
					/>
				</li>
				<li
					className='navigation-list__item'
				>
					<ReelsNavLink
						isSectionActive={Boolean(activeSection)}
					/>
				</li>
				<li
					className='navigation-list__item'
				>
					<MessagesNavLink
						isSectionActive={Boolean(activeSection)}
					/>
				</li>
				<li
					className='navigation-list__item'
				>
					<CreateNavButton
						activeSection={activeSection}
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
