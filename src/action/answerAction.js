import {CREATE_ANSWER,LIST_ANSWER,DELETE_ANSWER,ANSWER_FETCH} from './Type'
import axios from 'axios'

export const create_answer = (value)=>{
    const Data = new FormData()
    // console.log(value);
    
    return dispatch=>{
        
        // Data.append('question',value.question)
        // Data.append('choiceCorrect',value.choiceCorrect)
        // Array.isArray(value.choice) && value.choice.map((choice,i)=>{
        //     Data.append('choice',value[`choice${i+1}`])
        // })
       
        axios.post('http://localhost:3001/createanswer',value)
            .then(res=>{
                dispatch({type:CREATE_ANSWER,payload:res.data})
            })
    }
}
export const list_answer = ()=>{
    return dispatch=>{
        axios.get('http://localhost:3001/listAnswer')
            .then(res=>{
                dispatch({type:LIST_ANSWER,payload:res.data})
            })
    }
}
export const answer_fetch =(id)=>{
    return dispatch=>{
        axios.get('http://localhost:3001/answer/'+id)
            .then(res=>{
                dispatch({type:ANSWER_FETCH,payload:res.data})
            })
    }
}
export const delete_answer =(id)=>{
    return dispatch=>{
        axios.delete('http://localhost:3001/answeredit/'+id).then(res=>{
            axios.get('http://localhost:3001/listAnswer')
            .then(res=>{
                dispatch({type:DELETE_ANSWER,payload:res.data})
            })
        })
    }
}