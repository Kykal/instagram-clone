//Typings
type BackgroundOnClick = {
	onClick: () => void;
}


//Main component content
const BackgroundOnClick = (props: BackgroundOnClick): JSX.Element => {
	//Main component render
	return (
		<div
			className='reactive-background'
			onClick={props.onClick}
		/>
	);
};


export default BackgroundOnClick; //Export main component
