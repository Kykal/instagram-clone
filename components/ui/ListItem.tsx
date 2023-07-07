//Typings
export type ListItem = {
	children: any;
	icon?: JSX.Element;
	rightIcon?: JSX.Element;
	dynamicIcon?: boolean;
	disableActiveIcon?: boolean;
}


//Main component content
const ListItem = (props: ListItem): JSX.Element => {
	//Main component render
	return (
		<li
			className='list-item'
		>
			<button>
				{props.icon}
				<span
					className='grow'
				>
					{props.children}
				</span>
				{props.rightIcon}
			</button>
		</li>
	);
};


export default ListItem; //Export main component
