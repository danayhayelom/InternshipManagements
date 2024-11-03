import React,{useState,useEffect} from 'react';
import Axios from 'axios';

function Signin(){
const [username1 ,setusername]=useState('');
const [password1,setpassword]=useState('');
const user={
    username:username1,
password:password1
}
const data=()=>{
Axios.post("http://localhost:3001/apt/insert",user


).then(()=>{

    alert("succefull insert ");
});

};

    return(<div className="lbl">
        <label> Username </label>
<input type="text" name="username1" onChange={(e)=>{
    setusername(e.target.value)
}} /><br/>
<label> Password </label>
<input type="password" name="password1" onChange={(e)=>{
    setpassword(e.target.value)

}} /><br/>
<button onClick={data} > submite</button>
    </div>);
}
export default Signin