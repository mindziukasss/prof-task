import React, {useState} from "react";
import axios from "axios";

const baseURL = "https://catfact.ninja/fact";

export function About() {

	const [post, setPost] = useState(null);

	React.useEffect(() => {
		axios.get(baseURL).then((response) => {
			setPost(response.data);
		});
	}, []);

	if (!post) return null;

	return (
		<div>
			<h1>{post.fact}</h1>
			<p>{post.length}</p>
		</div>
	);

}
