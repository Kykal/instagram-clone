//NextJS
import Image from "next/image";
import Link from "next/link";


//Main component content
const AvatarAnchorButton = (): JSX.Element => {
	//Main component render
	return (
		<Link
			href={'/kykal'}
		
			className='px-3 py-3 bg-neutral-300 block group'
		>
			<figure
				className='transition-all relative center'
			>
				<Image
					src='https://avatars.githubusercontent.com/u/54295964'

					className='aspect-square w-6 h-6 rounded-full'

					alt='Kykal'
					width={460}
					height={460}
				/>
				
			</figure>
		</Link>
	);
};


export default AvatarAnchorButton; //Export main component
