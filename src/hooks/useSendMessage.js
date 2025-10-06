import { useState } from "react";
import { url } from "../http-common";
import { useAuthContext } from "./useAuthContext";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage = () => {
	const [loading, setLoading] = useState(false);
	const { messages, setMessages, selectedConversation } = useConversation();
	const { user } = useAuthContext();
	const sendMessage = async (message) => {
		if (!selectedConversation?._id) return;
		setLoading(true);
		try {
			const res = await fetch(`${url}/messages/send/${selectedConversation._id}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user.token}`,
				},
				body: JSON.stringify({ message }),
			});
			const data = await res.json();
			if (data.error) throw new Error(data.error);

			 const newMessagesArray = [...messages, data];
            setMessages(newMessagesArray);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { sendMessage, loading };
};
export default useSendMessage;
