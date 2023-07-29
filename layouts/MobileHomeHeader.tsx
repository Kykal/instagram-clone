//NextJS
'use client';


//React
import useDisclosure from '@/hooks/useDisclosure';


//Components
import NotificationAnchorIconButton from '@/components/NavBar/NotificationAnchorIconButton';
import Link from 'next/link';
import CreateMenuButton from '@/components/CreateMenuButton';


//Main component content
const MobileHomeHeader = (): JSX.Element => {
	//Main component render
	return (
		<header
			className='md:hidden absolute top-0 left-0 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black p-2'
		>
			<div
				className='h-9 flex items-center justify-between gap-2'
			>
				<h1
					className='font-medium text-xl pl-2 z-40'
				>
					<Link
						href='/'
					>
						Instagram
					</Link>
				</h1>
				<div
					className='h-full flex gap-2 items-center'
				>
					<CreateMenuButton />
					<NotificationAnchorIconButton />
				</div>
			</div>
		</header>
	);
};


export default MobileHomeHeader; //Export main component
