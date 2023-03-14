import React from 'react';
import './single.css';
import PostUp from './postUp/postUp';
import PostDown from './postDown/PostDown';

export default function Single({ post, addRole }) {
	return (
		<div
			className={post.featured ? 'post_container featured' : 'post_container'}
		>
			<div className='post_img_container'>
				<img src={post.logo} alt={post.company} />
			</div>
			<PostUp post={post} />
			<PostDown post={post} addRole={addRole} />
		</div>
	);
}
