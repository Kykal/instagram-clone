//Typings
type BackgroundOnClick = {
	onClick: () => void;
}


//Main component content
const BackgroundOnClick = (props: BackgroundOnClick): JSX.Element => {
	//Main component render
	return (
		<div
			className='absolute top-0 bottom-0 left-0 right-0'
			onClick={props.onClick}
		/>
	);
};


export default BackgroundOnClick; //Export main component
