import React from 'react';
import data from '../../assets/data/data.json';
import Single from '../singlePost/Single';
import './posts.css';

export default function Posts() {
	return (
		<article>
			{data.map((post) => {
				return <Single key={post.id} post={post} />;
			})}
		</article>
	);
}
