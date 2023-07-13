//Layouts
import MobileProfileHeader from "@/layouts/MobileProfileHeader";


//Typings
type Page = {
	children: JSX.Element;
	params: {
		profile: string;
	}
}


//Main component content
const Page = (props: Page): JSX.Element => {
	//Main component render
	return (
		<>
			<MobileProfileHeader
				username={props.params.profile}
			/>
			<main
				className='container mx-auto px-4 flex flex-col gap-4 items-center'
			>
				{props.children}
			</main>
		</>
	);
};


export default Page; //Export main component
