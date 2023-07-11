//React
import { useState, useEffect } from "react";


//Layouts
import Result from "./_Result";


//Main component content
const History = (): JSX.Element => {

	//React
	const [ display, setDisplay ] = useState<boolean>(false);


	useEffect( () => {
		const unsub = setTimeout( () => {
			setDisplay(true);
		}, 500 );


		return () => clearTimeout(unsub);
	} );

	//If it's "loading", show skeletons
	if( !display ){
		return(
			<>
				{[...Array(5)].map( (_, index) => (
					<div
						key={`search-skeleton-${index}`}
						className='px-6 py-2 flex items-center h-16 gap-2'
					>
						<div
							className='bg-neutral-200 h-full aspect-square animate-pulse rounded-full'
						/>
						<div
							className='grow flex flex-col gap-2'
						>
							<div
								className='bg-neutral-200 h-5 w-full animate-pulse rounded-full'
							/>
							<div
								className='bg-neutral-200 h-5 w-full animate-pulse rounded-full'
							/>
						</div>
					</div>
				) )}
			</>
		);
	}


	//Main component render
	return(
		<Result
			username='kykal'
			followers={239}
			name='Alan Benavides'
			imageUrl='https://avatars.githubusercontent.com/u/54295964'
			hasStories={true}
		/>
	);
};


export default History; //Export main component
