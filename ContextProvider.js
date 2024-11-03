 import {createContext,useState,useEffect} from "react"
 import React from "react"
 import Axios from 'axios'
   export  const userContext=createContext();
  const ContextProvider=({childern})=>{
    const [userDetails,setUserDetails]=useState(null);
     const Signin =async(username,password)=>{
        try{
            
            const data={
                Username:username,
                Password:password
            }
                const response =await Axios.post("http://localhost:8080/api/v1/auth/signin",
                data)
    const token =response.data;
    const role= await getRole(token);
    setUserDetails({token,role});} catch(error){
        console.log(error);
    }
     };
     const getRole=async(token)=>{
        const response=await  Axios.get("http://localhost:8080/api/v1/auth/danay",{

        headers:{
          Authorization:`Bearer ${token}`}
        });
        return response.data;
     }
   
     return(
        <userContext.Provider value ={{userDetails,Signin}}>
            {childern}
        </userContext.Provider>
     )
  }
  export default ContextProvider;