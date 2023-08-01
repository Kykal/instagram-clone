//Configurations
import NavBarSections from "@/configuration/navBarSections";


//Components
import CreateNavButton from "@/components/NavBar/CreateNavButton";
import ExploreNavLink from "@/components/NavBar/ExploreNavLink";
import HomeNavLink from "@/components/NavBar/HomeNavLink";
import MessagesNavLink from "@/components/NavBar/MessagesNavLink";
import NotificationNavButton from "@/components/NavBar/NotificationNavButton";
import NotificationSection from "@/components/NotificationSection";
import ProfileNavLink from "@/components/NavBar/ProfileNavLink";
import ReelsNavLink from "@/components/NavBar/ReelsNavLink";
import SearchSection from "@/components/SearchSection";
import SearchButton from "@/components/NavBar/SearchButton";
import SearchNavLink from "@/components/NavBar/SearchNavLink";
import Tooltip from "@/components/UI/Tooltip";


//Typings
type NavList = {
	activeSection: string;
	activeSectionHandler: (newSection: string) => void;
}


//Main component content
const NavList = ({activeSection, activeSectionHandler}: NavList): JSX.Element => {
	//Main component render
	return (
		<>
			<ul
				className={`navigation-list ${Boolean(activeSection) ? 'md:w-12' : 'md:w-12 xl:w-80'}`}
			>
				<li
					className='navigation-list__item'
				>
					<Tooltip
						label='Home'
					>
						<HomeNavLink
							isSectionActive={Boolean(activeSection)}
						/>
					</Tooltip>
				</li>
				<li
					className='hidden md:block navigation-list__item'
				>
					<SearchButton
						activeSection={activeSection}
						onClick={activeSectionHandler}
					/>
				</li>
				<li
					className='navigation-list__item md:hidden'
				>
					<SearchNavLink />
				</li>
				<li
					className='hidden md:block navigation-list__item'
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
					className='hidden md:block navigation-list__item'
				>
					<NotificationNavButton
						activeSection={activeSection}
						onClick={activeSectionHandler}
					/>
				</li>
				<li
					className='hidden md:block navigation-list__item'
				>
					<CreateNavButton
						activeSection={activeSection}
					/>
				</li>
				<li
					className='navigation-list__item'
				>
					<ProfileNavLink
						isSectionActive={Boolean(activeSection)}
					/>
				</li>
			</ul>
			{activeSection === NavBarSections.SEARCH && (
				<SearchSection />
			)}
			{activeSection === NavBarSections.NOTIFICATIONS && (
				<NotificationSection />
			)}
		</>
	);
};


export default NavList; //Export main component
