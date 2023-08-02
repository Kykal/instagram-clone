//Main component content
const Legal = (): JSX.Element => {

	const legalAnchors = [
		'About',
		'Help',
		'Press',
		'API',
		'Jobs',
		'Privacy',
		'Terms',
		'Location',
		'Language',
		'META Verified'
	];


	//Main component render
	return (
		<div
			className='legal-container'
		>
			<ul
				className='flex  flex-wrap gap-1'
			>
				{legalAnchors.map( (item, index) => (
					<li
						key={`legal-item-${index}`}
						className='legal-item  after:content-["\00B7"] after:pl-1'
					>
						{item}
					</li>
				) )}
			</ul>
			<span
				className='uppercase'
			>
				&copy; 2023 Instagram from Meta
			</span>
		</div>
	);
};


export default Legal; //Export main component
