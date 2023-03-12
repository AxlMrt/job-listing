import React from 'react'
import './postDown.css'

export default function PostDown({ post, filter }) {
  return (
		<section className='post_down'>
			<div>
				<span onClick={filter}>{post.role}</span>
			</div>
			<div>
				<span onClick={filter}>{post.level}</span>
			</div>
			{post.languages.map((language) => {
				return (
					<div key={language}>
						<span onClick={filter}>{language}</span>
					</div>
				);
			})}

			{post.tools.map((tool) => {
				return (
					<div key={tool}>
						<span onClick={filter}>{tool}</span>
					</div>
				);
			})}
		</section>
	);
}
