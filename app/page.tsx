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
				<Stories />
				<main>
					{[...Array(10)].map( (_, index) => (
						<div
							key={index}
							className='h-96'
						>
							<span>
								#: {index}
							</span>
						</div>
					) )}
				</main>
			</div>
		</>
	);
};


export default Page; //Export main component
