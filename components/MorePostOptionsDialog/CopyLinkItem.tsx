import Routes from "@/configuration/routes";
import Post from "@/models/Post";

//Typings
type CopyLinkItem = {
	post: Post;
	onClose: () => void;
}


//Main component content
const CopyLinkItem = (props: CopyLinkItem): JSX.Element => {

	const link = `https://instagram-clone-pi-dusky.vercel.app${Routes.POST}/${props.post.id}`;


	//Handlers
	const onClickHandler = async () => {
		await navigator.clipboard.writeText(link);

		props.onClose();
	};


	//Main component render
	return (
		<button
			className='active:bg-neutral-200 dark:active:bg-neutral-900/25 w-full p-3 disabled:text-neutral-500/50 disabled:active:bg-transparent dark:disabled:bg-transparent'
			onClick={onClickHandler}
		>
			Copy link
		</button>
	);
};


export default CopyLinkItem; //Export main component
