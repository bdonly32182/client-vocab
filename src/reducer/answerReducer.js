import {CREATE_ANSWER,DELETE_ANSWER,ANSWER_FETCH,LIST_ANSWER} from '../action/Type'
export default (state=[],action)=>{
    switch (action.type) {
        case CREATE_ANSWER:
            return action.payload;
        case ANSWER_FETCH:
            return action.payload;
        case LIST_ANSWER:
            return action.payload;
        case DELETE_ANSWER:
            return action.payload
        default:
            return state;
    }
}