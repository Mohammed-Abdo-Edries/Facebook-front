import { useEffect } from "react";

import { useSocketContext } from "../context/SocketContext";
import useConversation from "../zustand/useConversation";

// import notificationSound from "../assets/sounds/notification.mp3";

const useListenMessages = () => {
	const { socket } = useSocketContext();
	const { setMessages } = useConversation();

	useEffect(() => {
		if (!socket) return;
		 const handleNewMessage = (newMessage) => {
            const { messages } = useConversation.getState(); 
            const newMessagesArray = [...messages, newMessage];
            setMessages(newMessagesArray);
        };
		socket.on("newMessage", handleNewMessage);

		return () => socket?.off("newMessage",handleNewMessage);
	}, [socket, setMessages]);
};
export default useListenMessages;
