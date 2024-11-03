import React,{useState} from 'react'
import Axios from 'axios'
function Adviser(){
    const datass={
       firstname:"",
       lastname:"",
       Username:"",
       Password:"",
       Email:"",
       Gender:"",
       Role:"",
   Department:"",
   Course_load:""}
   const [submite,setsubmite]=useState(datass)
   const enter=(e)=>{
const {name,value}=e.target
setsubmite({...submite,[name]:value})
   }
   const handle=()=>{
       const data={
       firstName:submite.firstname,
       lastName:submite.lastname,
       username:submite.Username,
       password:submite.Password,
       email:submite.Email,
       gender:submite.Gender,
       role:submite.Role,
       department:submite.Department,
       courseload:submite.Course_load
       }
   
Axios.post("http://localhost:8080/api/v1/auth/registers",data).then((response)=>{
   console.log(response)
   alert("you are register" )
})
}
   return(<div>
        <lable>Enter you firstname  </lable>
<input type="text" placehloder="eneter your fristname please " name="firstname" 
value={submite.firstname} onChange={enter}/><br/>
<lable> Enter you lastname </lable>
   <input type="text" placeholder="enter your lastName please "name="lastname" 
   value={submite.lastname} onChange={enter}/><br/>
   <lable>Enter you username </lable>
<input type="text" placehloder="eneter your username please" name="Username" 
value={submite.Username} onChange={enter}/><br/>
<lable> Enter your password </lable>
<input type="text" placeholder="enter your password please " name="Password" 
value={submite.password} onChange={enter}/><br/>
   <lable> Enter you Email </lable>
   <input type="text" placeholder="enter your password please " name="Email" 
   value={submite.Email} onChange={enter}/><br/>
   <lable> Enter you Gender </lable>
   <input type="text"  name="Gender" value={submite.Gender} onChange={enter}/><br/>
   <lable> Enter you Role </lable>
   <input type="text"  name="Role" value={submite.Role} onChange={enter}/><br/>
   <label> Department </label>
   <input type="text" name="Department" value={submite.Department} onChange={enter}
    /><br/>
   <label> Course Load </label>
   <input type="number" name="Course_load"  value={submite.Course_load} onChange={enter} /><br/>
   <button onClick={handle}> Register</button>
   </div>)
    }
export  default Adviser