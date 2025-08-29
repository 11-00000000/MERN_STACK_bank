// "use client";
// import Loader from "@/components/Loader";
// import { axiosClient } from "@/utils/AxiosClient";
// import { toast } from "react-toastify";
// import { createContext, useContext, useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const mainContext = createContext({
//   user: {},
//   fetchUserProfile() {},
//   LogoutHandler() {},
//   fetchATMDetails() {},
//   atmCards: [],
// });

// export const useMainContext = () => useContext(mainContext);

// export const MainContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [messages, setMessages] = useState([]);
//   const [atmCards, setAtmCards] = useState([]);
//   const router = useRouter();

//   // fetch user profile
//   const fetchUserProfile = async () => {
//     try {
//       const token = localStorage.getItem("token") || "";
//       if (!token) return;
//       const response = await axiosClient.get("/auth/profile", {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });
//       const data = await response.data;
//       setUser(data);
//     } catch (error) {
//       toast.error(error.response?.data?.msg || error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // fetch atm details
//   const fetchATMDetails = async () => {
//     try {
//       if (!user?._id) return;
//       const response = await axiosClient.get(`/atm/get/${user._id}`, {
//         headers: {
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//       });
//       const data = await response.data;
//       setAtmCards(data.atmCards || []);
//     } catch (error) {
//       toast.error(error.response?.data?.msg || error.message);
//     }
//   };

//   // logout
//   const LogoutHandler = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//     router.push("/login");
//     toast.success("Logout Success");
//   };

//   // chatbot
//   const sendMessage = async (text) => {
//     if (!text.trim()) return;
//     setMessages((prev) => [...prev, { role: "user", text }]);
//     try {
//       const res = await axiosClient.post(
//         "/chatbot/ask",
//         { query: text },
//         { headers: { Authorization: "Bearer " + localStorage.getItem("token") } }
//       );
//       setMessages((prev) => [...prev, { role: "bot", text: res.data.reply }]);
//     } catch (err) {
//       setMessages((prev) => [
//         ...prev,
//         { role: "bot", text: "⚠️ Something went wrong" },
//       ]);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
//   }, []);

//   useEffect(() => {
//     if (user?._id) {
//       fetchATMDetails();
//     }
//   }, [user]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center w-full">
//         <Loader />
//       </div>
//     );
//   }

//   return (
//     <mainContext.Provider
//       value={{
//         user,
//         fetchUserProfile,
//         LogoutHandler,
//         fetchATMDetails,
//         atmCards,
//         setAtmCards,
//       }}
//     >
//       {children}
//     </mainContext.Provider>
//   );
// };

"use client";
import Loader from "@/components/Loader";
import { axiosClient } from "@/utils/AxiosClient";
import { toast } from "react-toastify";

// const { createContext, useContext, useState, useEffect } = require("react");
import {createContext, useContext, useState, useEffect} from 'react'
import { useRouter } from "next/navigation";

const mainContext = createContext({user:{},fetchUserProfile(){},LogoutHandler(){},fetchATMDetails(){},atm:{}})

export const useMainContext = ()=> useContext(mainContext)

export const MainContextProvider = ({children})=>{

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const router = useRouter()

    const [atm,setAtm] = useState(null)
    // to fetch user profile 
    const fetchUserProfile = async()=>{

        try {
            const token =localStorage.getItem("token") || ''
            if(!token) return
            const response = await axiosClient.get('/auth/profile',{
                headers:{
                    'Authorization':'Bearer '+ token
                }
            })
            const data  = await response.data
            console.log(data)
            setUser(data)


        } catch (error) {
            toast.error(error.response.data.msg || error.message)
        }finally{
            setLoading(false)
        }
    }


    const fetchATMDetails = async(id)=>{

        try {
        
            if(!id){
                return
            }
            const response = await axiosClient.get(`/atm/get/${id}`,{
                headers:{
                    'Authorization':'Bearer '+ localStorage.getItem("token")
                }
            })
            const data  = await response.data  
            setAtm(data)


        } catch (error) {
            console.log(error)
            toast.error(error.response.data.msg || error.message)
        } 
    }
    const LogoutHandler = ()=>{
        localStorage.removeItem("token")
        setUser(null)
        router.push("/login")
        toast.success("Logout Success")
    }


    useEffect(()=>{
        fetchUserProfile()
    },[])

    if(loading){
            return <div className="min-h-screen flex items-center justify-center w-full">
                <Loader/>
            </div>
    }

    return <mainContext.Provider value={{user,fetchUserProfile,LogoutHandler,fetchATMDetails,atm}}>
        {children}
    </mainContext.Provider>
}