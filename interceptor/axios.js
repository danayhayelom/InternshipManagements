import Axios from 'axios'
import {useNavigate} from 'react-router-dom'
let refresh = false;
Axios.interceptors.response.use(resp=>resp, async error=>{
    const navigate=useNavigate();

    try{

    if(error.response.status === 404 && !refresh){
        refresh =true;
        const response =await Axios.post('refresh',{},{withCredentials:true});
        if(response.status ===200){
            Axios.defaults.headers.common['Authorization']= `Bearer ${response.data['token']}`;
            return Axios(error.config);
        }
    }
    refresh =false;
    return error;
}catch(error){
    console.log("time out")
    navigate('/')
}

}
    
)

