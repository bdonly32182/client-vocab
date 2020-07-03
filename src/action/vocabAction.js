import {CREATE_WORD,LIST_WORD,DELETE_WORD,WORD_FETCH,FIND_WORD} from './Type'
import axios from 'axios'
export const create_word =(value)=>{
    return dispatch=>{
        axios.post('http://localhost:3001/createWord',value)
            .then(res=>{
                dispatch({type:CREATE_WORD,payload:res.data})
            }).catch(e=>{
                console.log('create fail');
                
            })
    }
}
export const list_wotd =()=>{
    return dispatch=>{
        axios.get('http://localhost:3001/listword')
            .then(res=>{
                dispatch({type:LIST_WORD,payload:res.data})
            })
    }
}
export const word_fetch =(id)=>{
    return dispatch=>{
        axios.get('http://localhost:3001/word/'+id)
            .then(res=>{
                dispatch({type:WORD_FETCH,payload:res.data})
            })
    }
}
export const delete_word =(id)=>{
    return dispatch=>{
        axios.delete('http://localhost:3001/delword/'+id)
            .then(res=>{
                axios.get('http://localhost:3001/listword')
            .then(res=>{
                dispatch({type:DELETE_WORD,payload:res.data})
            })
            })
    }
}
export const find_word =(word,category) =>{
   
    let find_search = {
        category:category,
        word:word
    }
    return dispatch=>{
        axios.post('http://localhost:3001/find',find_search).then(res=>{
            dispatch({type:FIND_WORD,payload:res.data})
        })
        
    }
}