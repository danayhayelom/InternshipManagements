import{Navigate} from 'react-router-dom'
import React from "react"
import {useLocalState} from "./hooks/useLocalStorage";
function ProtecRouter({children}){
    const [myValue, setMyValue] = useLocalState('', 'myValue');
    console.log("myValue:", myValue); 
    return myValue?children:<Navigate to="/"/>
}
export default ProtecRouter