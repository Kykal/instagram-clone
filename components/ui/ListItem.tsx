//Typings
export type ListItem = {
	children: any;
	icon?: JSX.Element;
	dynamicIcon?: boolean;
	disableActiveIcon?: boolean;
	onClick?: () => void;
}


//Main component content
const ListItem = (props: ListItem): JSX.Element => {
	//Main component render
	return (
		<li
			className='list-item'
			onClick={props.onClick}
		>
			<button
				className='tablet'
			>
				{props.icon}
				<span
					className='grow'
				>
					{props.children}
				</span>
			</button>
			<button
				className='mobile'
			>
				{props.icon}
			</button>
		</li>
	);
};


export default ListItem; //Export main component
