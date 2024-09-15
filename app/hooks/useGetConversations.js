import { useEffect, useState } from "react";
import { url } from "../http-common"
// import { useAuthContext } from "./useAuthContext";

export const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null)
	const [conversations, setConversations] = useState([]);
	// const {user} = useAuthContext()

	useEffect(() => {
		const getConversations = async () => {
			const user = JSON.parse(localStorage.getItem('user'))
			console.log(user.userId)
			setLoading(true);
			setError(null)
			const response = await fetch(`${url}/api/${user.userId}/friends`, {
				method: 'GET',
				headers: { 'Content-Type': 'application/json' },
			})
			console.log(response.json())
			const json = await response.json()
			if (!response.ok) {
				setLoading(false)
				setError(json.error)
			}
			if (response.ok) {
				console.log(`Conversations ${json}`)
				setLoading(false)
				setConversations(json);
			}
		};

		getConversations();
	}, []);

	return { loading, conversations, error };
};
