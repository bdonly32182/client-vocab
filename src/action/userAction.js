import axios from 'axios'
import {USER_LOGIN,LOGIN_FAIL,LOG_OUT} from './Type'
export const login =(value,history)=>{
    return dispatch =>{
       axios.post('http://localhost:3001/login',value)
            .then(res=>{
                console.log(res.data);
                res.data.user&&res.data.user.role === "admin"?
               
                dispatch ({type:USER_LOGIN,payload:res.data})&& history.push('/listAnswer')
                :
                dispatch ({type:LOGIN_FAIL,payload:res.data})
            }) 
    }
    
}
export const logout =()=>{
    return dispatch=>{
        dispatch({type:LOG_OUT})
    }
}