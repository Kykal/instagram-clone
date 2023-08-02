//Layouts
import Stories from "@/layouts/Stories/Stories";
import MobileHomeHeader from "@/layouts/MobileHomeHeader";


//Main component content
const Page = (): JSX.Element => {
	//Main component render
	return (
		<>
			<MobileHomeHeader />
			<div
				className='feed__container'
			>
				<main
					className='flex flex-col items-center w-full md:max-w-2xl md:gap-14'
				>
					<Stories />
					<article
						role="feed"
						className='feed'
					>
						{[...Array(10)].map( (_, index) => (
							<section
								key={index}
								className='h-96'
							>
								<span>
									#: {index}
								</span>
							</section>
						) )}
					</article>
				</main>
			</div>
		</>
	);
};


export default Page; //Export main component
