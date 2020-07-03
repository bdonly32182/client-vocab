import {combineReducers} from 'redux'
import {reducer as reduxForm} from 'redux-form'
import User from './userReducer'
import Word from './vocabReducer'
import Answer from './answerReducer'
const rootReducer = combineReducers({
    form:reduxForm,
    users: User,
    words:Word,
    answers:Answer
})
export default rootReducer