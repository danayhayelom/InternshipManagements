import React,{useState} from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';
function New(){
    const [userDetails,setUserDetails]= useState({});
    const navigate=useNavigate();
   const checkRole=async()=>{
  const token =localStorage.getItem('token');
            if(!token)return  navigate('/')
          try{
          const response= await Axios.get("http://localhost:8080/api/v1/auth/danay",{

          headers:{
            Authorization:`Bearer ${token}`
          }
          }).then((response)=>{
            setUserDetails(response.data);
          })
         
          
            if(userDetails.role==="ADMIN"){
              navigate('/home')           }
            else if(userDetails==="SYSTEM"){
        navigate('/post')
            }
          }catch(error){
            console.error(error)
          }
          }
          
            
}
export default New