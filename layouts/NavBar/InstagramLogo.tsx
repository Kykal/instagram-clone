//NextJS
import Link from "next/link";


//MATERIAL DESIGN
//Icons
import {
	RiPolaroid2Line,
} from 'react-icons/ri';


//Typings
type InstagramLogo = {
	activeSection: string;
}
type InstagramIconButton = {
	className?: string;
}


//Main component content
const InstagramLogo = ({activeSection}: InstagramLogo): JSX.Element => {
	//Main component render
	return (
		<div
			className={`h-24 hidden md:flex items-center ${!activeSection && 'xl:p-3.5'}`}
		>
			{activeSection ? (
				<InstagramIconButton />
			) : (
				<>
					<Link
						href='/'
						className='hidden xl:block font-medium text-2xl z-40'
					>
						Instagram
					</Link>
					<InstagramIconButton
						className='xl:hidden'
					/>
				</>
			)}
		</div>
	);
};


export default InstagramLogo; //Export main component




const InstagramIconButton = ({className}: InstagramIconButton) => {

	const baseStyles = 'z-40 w-full hover:bg-neutral-100 dark:bg-black dark:hover:bg-neutral-900 aspect-square flex items-center justify-center rounded-md';


	const _className = className ? `${className} ${baseStyles}` : baseStyles;


	return(
		<Link
			href='/'
			className={_className}
		>
			<RiPolaroid2Line className='text-2xl' />
		</Link>
	);
}
	