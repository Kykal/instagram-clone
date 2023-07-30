//Main component content
const StoriesCarousel = (): JSX.Element => {
	//Main component render
	return (
		<div
			className='stories__carousel'
		>
			{[...Array(10)].map( (_, index) => (
				<div
					key={index}
					className='center w-20 shrink-0'
				>
					a
				</div>
			) )}
		</div>
	);
};


export default StoriesCarousel; //Export main component
