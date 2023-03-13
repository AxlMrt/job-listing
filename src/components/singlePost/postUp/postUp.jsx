import React from 'react';
import './postUp.css';

export default function postUp({ post }) {
	return (
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
	);
}
