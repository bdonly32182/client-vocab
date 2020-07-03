import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'
import LoginFormField from './validForm/LoginFormField'

class LoginForm extends Component{
    render(){
        const {handleSubmit,onSubmitLogin} = this.props
        
        return(
            <div>
                <form>
                   <Field
                label ="Email"
                type="email"
                name="email"
                component={LoginFormField}
                />
                 <Field
                label ="Password"
                type="password"
                name="password"
                component={LoginFormField}
                />
                <button className="btn btn-primary btn-block" onClick={handleSubmit(onSubmitLogin)}>Login</button> 
                </form>
                
            </div>
        )
    }
}
LoginForm = reduxForm({form:'LoginForm'})(LoginForm)
export default LoginForm