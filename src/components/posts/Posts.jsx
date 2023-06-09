import React from 'react';
import data from '../../assets/data/data.json';
import Single from '../singlePost/Single';
import './posts.css';

export default function Posts({ addRole }) {
	return (
		<article>
			{data.map((post) => {
				return <Single key={post.id} post={post} addRole={addRole} />;
			})}
		</article>
	);
}
