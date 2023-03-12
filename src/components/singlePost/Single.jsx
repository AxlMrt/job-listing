import React from 'react';
import './single.css';
import PostUp from './postUp/postUp';
import PostDown from './postDown/PostDown';

export default function Single({ post }) {
	const filter = (e) => {
		const value = e.target.textContent;
		console.log(value)
		const posts = document.querySelectorAll('.post_container');
		posts.forEach((post) => {
			if (post.textContent.includes(value)) {
				console.log(post.textContent)
				post.style.display = 'block';
			} else {
				post.style.display = 'none';
			}
		});
	};

	return (
		<div
			className={post.featured ? 'post_container featured' : 'post_container'}
		>
			<div className='post_img_container'>
				<img src={post.logo} alt={post.title} />
			</div>
			<PostUp post={post} />
			<PostDown post={post} filter={filter} />
		</div>
	);
}
