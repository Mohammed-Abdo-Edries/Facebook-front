import { useEffect, useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { useAuthContext } from "./useAuthContext";
import { url } from "../http-common"

const useGetMessages = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	const { user } = useAuthContext();
	useEffect(() => { 
		const getMessages = async () => {
			console.log("selected conversations",selectedConversation)
			if (!selectedConversation?._id) return;
			setLoading(true);
			try {
			const res = await fetch(`${url}/messages/${selectedConversation._id}`
				, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user.token}`,
				},
			}
		);		
			const data = await res.json();
			console.log("messages",data)
			if (data.error) throw new Error(data.error);
				setMessages(data);
				console.log(messages)
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		if (selectedConversation?._id) getMessages();
	}, [selectedConversation?._id, setMessages]);

	return { messages, loading, setMessages };
};
export default useGetMessages;
