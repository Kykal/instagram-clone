//Models
import Post from "@/models/Post";


//Typings
type Indicators = Post & {
	activeItem: number;
}


//Main component content
const Indicators = (props: Indicators): JSX.Element | undefined => {

	if( props.multimedia.length === 1 ){
		return;
	}


	//Main component render
	return(
		<div
			className='absolute bottom-0 pb-2 w-full flex items-center justify-center'
		>
			<div
				className='h-2 flex items-center justify-center gap-1'
			>
				{props.multimedia.map( (_, index) => (
					<div
						key={`${props.username}-post-item-${index}`}
						className={`rounded-full h-full aspect-square transition-all ${props.activeItem === index ? 'bg-white' : 'bg-neutral-100/50'}`}
					/>
				) )}
			</div>
		</div>
	);
};


export default Indicators; //Export main component
