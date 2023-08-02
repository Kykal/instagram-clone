//NextJS
import Routes from "@/configuration/routes";
import Link from "next/link";


//Main component content
const SuggestedForYou = (): JSX.Element => {
	//Main component render
	return (
		<div
			className='suggested-for-you-container'
		>
			<div
				className='flex justify-between text-sm items-center'
			>
				<span
					className='font-semibold text-neutral-600 '
				>
					Suggested for you
				</span>
				<Link
					href={Routes.EXPLORE_PEOPLE}
					className='hover:text-neutral-500'
				>
					See All
				</Link>
			</div>
		</div>
	);
};


export default SuggestedForYou; //Export main component
