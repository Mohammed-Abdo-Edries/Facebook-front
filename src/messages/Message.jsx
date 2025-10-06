import { FaUserCircle} from "react-icons/fa"
import {useAuthContext} from "../hooks/useAuthContext";
import useConversation from "../zustand/useConversation";

const Message = ({ message }) => {
    const { user } = useAuthContext();
    const { selectedConversation } = useConversation();
    const fromMe = message.senderId === user._id;
    const chatAlignment = fromMe ? "justify-end" : "justify-start";    
    const bubbleBgColor = fromMe ? "bg-blue-600" : "bg-blue-200";    
    const textColor = fromMe ? "text-white" : "text-gray-900";     
    const marginClass = fromMe ? "ml-auto" : "mr-auto";    
    // const profilePic = fromMe 
    //     ? user.profilePic 
    //     : selectedConversation?.profilePic || defaultAvatar;

    const shakeClass = message.shouldShake ? "shake" : "";
    return (
        <div className={`flex w-full mt-2 ${chatAlignment}`}> 
            {!fromMe && (
                <div className='w-10 h-10 rounded-full overflow-hidden mr-2'>
                      <FaUserCircle className='w-full h-full text-gray-400' /> 
                </div>
            )}

            <div 
                className={`max-w-xs p-3 rounded-xl break-words inline-block shadow 
                            ${bubbleBgColor} ${textColor} ${shakeClass} ${marginClass}`}
            >
                {message.message}
            </div>
            
            {fromMe && (
                <div className='w-10 h-10 rounded-full overflow-hidden ml-2'>
                      <FaUserCircle className='w-full h-full text-gray-400' /> 
                </div>
            )}
            
        </div>
    );
};
export default Message;