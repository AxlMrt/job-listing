import { useState } from 'react';
import Filter from './components/filter/Filter';
import Header from './components/header/Header';
import Posts from './components/posts/Posts';

function App() {
	const [role, setRole] = useState([]);

	const addRole = (e) => {
		if (role.includes(e.target.textContent)) return;
		setRole([...role, e.target.textContent]);
	};

	const removeRole = (e) => {
		setRole(
			role.filter((role) => role !== e.target.previousSibling.textContent)
		);
	};

	const clear = () => {
		setRole([]);
	};

	const filter = () => {
		const posts = document.querySelectorAll('.post_container');
		posts.forEach((post) => {
			post.style.display = 'flex';
		});
		role.forEach((role) => {
			posts.forEach((post) => {
				if (!post.textContent.includes(role)) {
					post.style.display = 'none';
				}
			});
		});
	};
	filter();

	return (
		<main>
			<Header />
			<Filter role={role} removeRole={removeRole} clear={clear} />
			<Posts addRole={addRole} />
		</main>
	);
}

export default App;
