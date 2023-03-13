import React from 'react';
import './filter.css';

export default function Filter({ role, removeRole, clear }) {
	return (
		<div className='filter_container'>
			{role.length !== 0 && (
				<div className='post_filter_container'>
					<div className='post_filter'>
						{role.map((role) => {
							return (
								<div className='post_role_container' key={role}>
									<span className='post_role filter'>{role}</span>
									<span className='post_role remove_role' onClick={removeRole}>
										X
									</span>
								</div>
							);
						})}
					</div>
					<div className='post_clear'>
						<span onClick={clear}>Clear</span>
					</div>
				</div>
			)}
		</div>
	);
}
