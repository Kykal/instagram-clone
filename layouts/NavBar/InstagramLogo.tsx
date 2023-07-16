//NextJS
import Link from "next/link";


//Components
import InstagramButton from "@/components/InstagramButton";


//Main component content
const InstagramLogo = (): JSX.Element => {


	//Main component render
	return (
		<div
			className='h-24 flex items-center xl:p-3.5'
		>
			<Link
				href='/'
				className='hidden xl:block font-medium text-2xl'
			>
				Instagram
			</Link>
			<InstagramButton />
		</div>
	);
};


export default InstagramLogo; //Export main component
