//NextJS
'use client';


//Components
import SearchInput from '@/components/SearchInput';
import HomeButton from '@/components/HomeButton';
import NotificationButton from '@/components/NotificationButton';


//Main component content
const MobileHomeHeader = (): JSX.Element => {
	//Main component render
	return (
		<header
			className='sm:hidden absolute top-0 left-0 w-full border-b border-neutral-200 bg-white p-2'
		>
			<div
				className='h-9 flex items-center gap-2'
			>
				<HomeButton />
				<SearchInput />
				<NotificationButton />
			</div>
		</header>
	);
};


export default MobileHomeHeader; //Export main component
