 import {createContext, useState, useEffect} from "react";
 import axios from "axios";

 export const AuthContext = createContext();

 export const AuthContextProvider = ({children}) => { 
    const [currentuser, setCurrentuser] = useState(JSON.parse(localStorage.getItem("user") || null));
    const login = async(input)=> {
        
        if(currentuser.length > 0){
            setCurrentuser(null);
            
        }
        
        const res = await axios.post("http://localhost:3000/api/auth/login", input, {
            method:"POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ input}),
            withCredentials: true, // 🔥 include cookies
          });
          
        setCurrentuser(res.data);

         res;
        console.log(res,"jhsjhs");
        return res;
    }
    const sellerLogin = async (input)=> {
        if (currentuser.length > 0){
            setCurrentuser(null);
        }
        const res = await axios.post("http://localhost:3000/api/sellerAuth/sellerLogin", input,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({input}),
            withCredentials: true,
        });
        
        setCurrentuser(res.data);

        console.log(res);
        console.log(currentuser);
    }
const logout = async () => {
    const res = await axios.post("http://localhost:3000/api/auth/logout",{},{
        withCredentials: true,
    });
    res;
    setCurrentuser(null);
}
    useEffect (()=>{
        localStorage.setItem("user", JSON.stringify(currentuser));
    }, [currentuser])
    return(
         <AuthContext.Provider value={{currentuser, login, sellerLogin, logout}} >
            {children}
        </AuthContext.Provider>
    );
    


 }
