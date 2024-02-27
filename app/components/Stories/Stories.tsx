//Styles
import './styles.css';


//Components
import Avatar from '../Avatar';


//Typings
import type { AvatarProps } from '../Avatar/Avatar';


//Main component content
const Stories = (): JSX.Element => {

	const stories: AvatarProps[] = [
		{
			userUrl: '/USER',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: '{USER}',
		},
		{
			userUrl: '/USER',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: '{USER}',
		},
		{
			userUrl: '/USER',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: '{USER}',
		},
		{
			userUrl: '/USER',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: '{USER}',
		},
		{
			userUrl: '/USER',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: '{USER}',
		},
		{
			userUrl: '/USER',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: '{USER}',
		},
		{
			userUrl: '/USER',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: '{USER}',
		},
	];


	//Main component render
	return (
		<div id='stories-container' >
			<ul id='stories' role='list' >
				{stories.map( (element, index) => (
					<li
						key={`${index}-${element.displayName}`}
						className='story-container'
					>
						<Avatar
							{...element}
						/>
					</li>
				) )}
			</ul>
		</div>
	);
};


export default Stories; //Export main component
