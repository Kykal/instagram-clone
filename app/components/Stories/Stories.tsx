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
			userUrl: '/cool_cat',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: 'cool_cat',
		},
		{
			userUrl: '/stargazer',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: 'stargazer',
		},
		{
			userUrl: '/supernova',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: 'supernova',
		},
		{
			userUrl: '/techgeek',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: 'techgeek',
		},
		{
			userUrl: '/book_worm',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: 'book_worm',
		},
		{
			userUrl: '/adventure_seeker',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: 'adventure_seeker',
		},
		{
			userUrl: '/soccer_fan',
			imgUrl: 'https://dummyimage.com/200x200/000/fff',
			hasStory: true,
			displayName: 'soccer_fan',
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
