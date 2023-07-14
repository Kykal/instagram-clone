//NextJS
'use client';


//Components
import SearchInput from '@/components/SearchInput';
import InstagramButton from '@/components/InstagramButton';
import NotificationAnchorIconButton from '@/components/NotificationAnchorIconButton';


//Main component content
const MobileHomeHeader = (): JSX.Element => {
	//Main component render
	return (
		<header
			className='md:hidden absolute top-0 left-0 w-full border-b border-neutral-200 bg-white p-2'
		>
			<div
				className='h-9 flex items-center gap-2'
			>
				<InstagramButton />
				<SearchInput />
				<NotificationAnchorIconButton />
			</div>
		</header>
	);
};


export default MobileHomeHeader; //Export main component
