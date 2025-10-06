import { useEffect, useState } from "react";
import { url } from "../http-common"
import { useAuthContext } from "../hooks/useAuthContext";

export const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null)
	const [conversations, setConversations] = useState([]);
	// const {user} = useAuthContext()

	useEffect(() => {
		 const getConversations = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      setLoading(true);
      try {
        const res = await fetch(`${url}/users/${user.userId}/friends`,
           {
             headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${user.token}`,
				}
      });

        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch friends");

        setConversations(data); 
		// console.log("conversations",data)
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
		getConversations();
	}, []);

	return { loading, conversations, error };
};
