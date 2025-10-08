import Conversation from "../conversations/Conversation";
import { useGetConversations } from "../hooks/useGetConversations";
import Popup from "reactjs-popup";
import MessageContainer from "../messages/MessageContainer"; 
import useConversation from "../zustand/useConversation"; 
import { FaFacebookMessenger } from "react-icons/fa";

const Chats = () => {
    const { loading, conversations, error } = useGetConversations();
    const { selectedConversation } = useConversation(); 
        const showMessageView = !!selectedConversation; // Converts to boolean

    const ConversationList = () => (
        <div className='py-2 flex flex-col overflow-auto w-60 h-60'>
            {conversations.map((conversation, idx) => (
                <Conversation
                    key={conversation._id}
                    conversation={conversation}
                />
            ))}
            {loading && <span className='loading loading-spinner mx-auto'></span>}
            {error && <span className=' mx-auto'>{error}</span>}
        </div>
    );

    return (
        <Popup contentStyle={{ 
                position: 'fixed',
                bottom: '14px', 
                right: '0px', 
                maxHeight: 'calc(100vh - 32px)', 
                height: showMessageView ? 'calc(100vh - 80px)' : '240px',                
                 width: showMessageView ? '450px' : '240px',
                border: 'black 2px solid', 
                overflow: 'hidden',
                borderRadius: '8px' 
            }}
            trigger={<button><FaFacebookMessenger className="ml-2 text-xl" /></button>} 
            position={"bottom right"} 
            closeOnDocumentClick >
            <div className={`bg-white rounded overflow-hidden shadow-xl h-full w-full`} >                
                <div 
                     className='flex transition-transform duration-300 ease-in-out h-full'
                    style={{
                        transform: showMessageView ? 'translateX(-240px)' : 'translateX(0)', 
                        width: '700px', 
                    }} >
                    <div className="flex-shrink-0 w-60 h-full">
                        <ConversationList />
                    </div>
                    <div className="flex-shrink-0 w-[450px] h-full">
                        <MessageContainer /> 
                    </div>
                </div>
            </div>
        </Popup>
    );
};
export default Chats;