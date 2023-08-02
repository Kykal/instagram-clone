//NextJS
import Image from "next/image";


//Typings
import User from "@/typings/User";


//Main component content
const UserAvatar = (props: User): JSX.Element => {
	//Main component render
	return (
		<div
			className='avatar-container'
		>
			{props.hasStories && (
				<>
					<div className='avatar-gradient' />
					<div className='avatar-gradient--transparency' />
				</>
			)}
			<Image
				src={props.imgUrl}
				alt='Profile'
				fill
				className="avatar-image"
			/>
		</div>
	);
};


export default UserAvatar; //Export main component
