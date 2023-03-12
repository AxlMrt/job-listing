import React from 'react';
import './single.css';

export default function Single({ post }) {
	console.log(post);
	return (
		<div
			className={post.featured ? 'post_container featured' : 'post_container'}
		>
			<div className='post_img_container'>
				<img src={post.logo} alt={post.title} />
			</div>
			<section className='post_up'>
				<div className='post_company'>
					<h1>{post.company}</h1>
					{post.new && <div className='company_new'>New!</div>}
					{post.featured && <div className='company_featured'>Featured</div>}
				</div>
				<div className='post_position'>
					<h2>{post.position}</h2>
				</div>
				<ul className='post_details'>
					<li>
						<span>{post.postedAt}</span>
					</li>
					<li>
						<span>{post.contract}</span>
					</li>
					<li>
						<span>{post.location}</span>
					</li>
				</ul>
			</section>
			<section className='post_down'>
				<div>
					<span>{post.role}</span>
				</div>
				<div>
					<span>{post.level}</span>
				</div>
				{post.languages.map((language) => {
					return (
						<div>
							<span key={language}>{language}</span>
						</div>
					);
				})}

				{post.tools.map((tool) => {
					return (
						<div>
							<span key={tool}>{tool}</span>
						</div>
					);
				})}
			</section>
		</div>
	);
}
