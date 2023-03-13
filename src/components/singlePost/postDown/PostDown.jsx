import React from 'react';
import './postDown.css';

export default function PostDown({ post, addRole }) {
	return (
		<section className='post_down'>
			<div>
				<span className='post_role' onClick={addRole}>
					{post.role}
				</span>
			</div>
			<div>
				<span className='post_role' onClick={addRole}>
					{post.level}
				</span>
			</div>
			{post.languages.map((language) => {
				return (
					<div key={language}>
						<span className='post_role' onClick={addRole}>
							{language}
						</span>
					</div>
				);
			})}

			{post.tools.map((tool) => {
				return (
					<div key={tool}>
						<span className='post_role' onClick={addRole}>
							{tool}
						</span>
					</div>
				);
			})}
		</section>
	);
}
