//NextJS
'use client';


//React
import useDisclosure from '@/hooks/useDisclosure';


//Components
import NotificationAnchorIconButton from '@/components/NavBar/NotificationAnchorIconButton';
import Link from 'next/link';


//Main component content
const MobileHomeHeader = (): JSX.Element => {

	//React
	const [ opened, { open, close } ] = useDisclosure();


	//Main component render
	return (
		<header
			className='md:hidden absolute top-0 left-0 w-full border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-black p-2'
		>
			<div
				className='h-9 flex items-center justify-between gap-2'
			>
				<h1
					className='font-medium text-xl pl-2'
				>
					<Link
						href='/'
					>
						Instagram
					</Link>
				</h1>
				<div
					className='h-full'
				>
					<NotificationAnchorIconButton />
				</div>
			</div>
		</header>
	);
};


export default MobileHomeHeader; //Export main component
