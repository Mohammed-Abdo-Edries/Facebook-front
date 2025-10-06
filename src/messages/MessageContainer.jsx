import { useEffect } from "react";
import useConversation from "../zustand/useConversation";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import  {useAuthContext}  from "../hooks/useAuthContext";

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();
console.log("Selected conversation in MessageContainer:", selectedConversation);
	useEffect(() => {
		// cleanup function (unmounts)
		return () => setSelectedConversation(null);
	}, [setSelectedConversation]);

	return (
		<div className='flex flex-col w-full h-full bg-white'>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
        {/* Header */}
        <div className='bg-slate-500 px-4 py-2 mb-2 flex justify-between items-center'>
            <button 
                onClick={() => setSelectedConversation(null)} 
                className="text-xl font-bold text-gray-900 mr-2"
            >
                &larr; 
            </button>
            
            <span className='label-text'>To:</span>{" "}
            <span className='text-gray-900 font-bold flex-1'>
                {selectedConversation.firstname} {selectedConversation.lastname}
            </span>
        </div>
        
        <Messages />
        <MessageInput />
    </>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { user } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 {user.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};