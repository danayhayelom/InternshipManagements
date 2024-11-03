import React,{useEffect,useState} from 'react'
import Axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Home(){
   
   
  const[danay,setdanay]=useState([]);
   const [data1,setdata]=useState([])
    const [userDetails,setUserDetails]=useState({});
    const navigate= useNavigate();
      
    const  info={
        Stram:"",
        Grade:""       
    }
   
    
    
    
    const [submite,setsubmite]=useState(info)
    const enter=(e)=>{
        const{name,value}=e.target;
        setsubmite({...submite,[name]:value});
    }
    useEffect(()=>{
        const token =localStorage.getItem('token');
            if(token){
           Axios.get("http://localhost:8080/api/v1/auth/danay",{

          headers:{
            Authorization:`Bearer ${token}`
          }
          }).then((response)=>{
            setUserDetails(response.data);
          }).catch((error)=>{
            navigate('/')
          })
         
            }
           
    },[]);
    useEffect(()=>{
      loaduser();
    },[])
    const [inputValues, setInputValues] = useState({});

    useEffect(() => {
      const initialInputValues = {};
      data1.forEach((user, index) => {
        initialInputValues[user.internship_id] = ''; 
      });
      setInputValues(initialInputValues);
    }, [data1]);
  const handleChange = (internshipId, e) => {
    setInputValues((prevValues) => ({ ...prevValues, [internshipId]: e.target.value }));
  };
      const applayintenship=async(e)=>{
        e.preventDefault();
        const promises = [];
        data1.forEach((user, index) => {
          const data2 = {
            placeholder: inputValues[user.internship_id],
            internship: {
              companyname: user.companyname,
              companylocation: user.companylocation,
              numberstudent: user.numberstudent,
              department: user.department
            },
            account: {
              firstname: userDetails.firstname,
              lastname: userDetails.lastname,
              username: userDetails.username,
              password: userDetails.password,
              role: userDetails.role,
              email: userDetails.email,
              gender: userDetails.gender
            }
          };
          promises.push(Axios.post("http://localhost:8080/api/v1/auth/applyinternship", data2));
        });
        await Promise.all(promises);
      };
    
    
    const loaduser=async()=>{
        const result= await Axios.get("http://localhost:8080/api/v1/auth/all");
        setdata(result.data);
    }
 
    
  /* const register=()=>{
    const data={
        stream:submite.Stream,
        grade:submite.Grade,
        account:{
firstname:userDetails.firstname,
lastname:userDetails.lastname,
username:userDetails.username,
password:userDetails.password,
email:userDetails.email,
gender:userDetails.gender,
role:userDetails.role
   }
    }
    Axios.post("http://localhost:8080/api/v1/auth/students",data).then((response)=>{
        console.log(response);
    })
   }*/
   
    
   return (<div>
    <table>
      <tr >
      <th><h2> CompanyLocation</h2>      <hr></hr>
</th>
      <th> <h2>CompanyName</h2>      <hr></hr>
</th>
      <th><h2> Department</h2>      <hr></hr>
</th>
      <th><h2> NumberOfStudent</h2>      <hr></hr>
</th>
      <th><h2>PerferenceOrder</h2>      <hr></hr>
</th>

      </tr>

    {
    data1.map((user)=>(
      
        <tr key={user.internship_id} > 
        
        <th> <h3>{user.companylocation }</h3></th>
      <th> <h3>  {user.companyname} </h3></th>
      <th> <h3>  {user.department} </h3></th>
    <th>  <h3>  {user.numberstudent} </h3></th>
    <input type="text"
                  value={inputValues[user.internship_id] || ''}
                  onChange={(e) => handleChange(user.internship_id, e)}
                />
        </tr>
    )) }</table>
    <button onClick={applayintenship}> ApplayInternship</button>
<lable>Stream</lable>       
<input type="text" name ="Stream" value={submite.Stream} onChange={enter}/>
          <lable>Grade</lable>
<input type="text" name ="Grade" value={submite.Grade} onChange={enter}/>

   </div>)
   
}
export default Home