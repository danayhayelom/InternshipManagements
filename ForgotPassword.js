import React, {useState} from 'react'
import axios from 'axios'
function ForgotPassword(){
    const [Email, setEmail] = useState('');
const submite=(e)=>{
setEmail(e.target.value);
}
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data={
            email:Email
        }
        try {
           await axios.post("http://localhost:8080/api/v1/auth/forgotpasword", data);
            alert('Password reset email sent!');
        } catch (error) {
            alert('Error sending email');
            console.log()
        }
    };
    return(<div>
         <input
                type="email"
                value={Email}
                onChange={submite}
                placeholder="Enter your email"
                required
            />
            <button onClick={handleSubmit}>Reset Password</button>
    </div>);
}
export default ForgotPassword;