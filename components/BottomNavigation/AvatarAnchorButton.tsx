//NextJS
'use client';
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";


//Main component content
const AvatarAnchorButton = (): JSX.Element => {
	
	const pathname = usePathname();

	const isActive = pathname === '/kykal';
	

	//Main component render
	return (
		<Link
			href={'/kykal'}

			data-active={isActive}
			className='px-3 py-3 block group z-40'
		>
			<figure
				className='transition-all relative center group-hover:scale-110'
			>
				<Image
					src='https://avatars.githubusercontent.com/u/54295964'

					className='aspect-square w-6 h-6 rounded-full'

					alt='Kykal'
					width={460}
					height={460}
				/>
				{isActive && (
					<div
						className='absolute rounded-full border-2 border-black w-7 h-7'
					/>
				)}
			</figure>
		</Link>
	);
};


export default AvatarAnchorButton; //Export main component
