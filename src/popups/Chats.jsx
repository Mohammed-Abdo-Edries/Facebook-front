import conversation from "../conversations/Conversation";
// import SearchInput from "./SearchInput";
import {IoChatbubbleEllipsesSharp} from "react-icons/io5"
import { useGetConversations } from "../hooks/useGetConversations"
import Popup from "reactjs-popup"


const Chats = () => {
	  const { loading, conversations, error } = useGetConversations();
	
	return (
		<Popup trigger={<button><IoChatbubbleEllipsesSharp className="ml-2" /></button>} position={"bottom right"} closeOnDocumentClick>
				  <div className='bg-white w-60 h-60 py-2 px-4 rounded'>
				  <div className='py-2 flex flex-col overflow-auto'>
				  {conversations.map((conversation, idx) => (
				  <conversation
							key={conversation._id}
							conversation={conversation}
							lastIdx={idx === conversations.length - 1}
					/>
				  ))}
		
				  {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
				  {error ? <span className=' mx-auto'>{error}</span> : null}
				  </div>
				  </div>
				  </Popup>
	);
};
export default Chats;

