import React,{Component} from 'react'
import {connect} from 'react-redux'
import LoginForm from '../Form/LoginForm'
import {login} from '../action'
import ListWord from './ListWord'
import Welcome from './Welcome'
import Header from '../component/Header'

class Login extends Component{
   async componentDidMount(){
        
    let Token =await localStorage.getItem('token')
     if (Token) {
        this.props.history.push('/listAnswer')

     }
    }
   
    render(){
        const {formValue,login,users,history} = this.props
        console.log(users);
        return(
            <div className="container-fluid p-3 mb-2 bg-warning">
             
                {!users.token &&
                <div className="row">
                    <div className="col">
                                
                    </div>
                    <div className="col border border-secondary shadow-lg p-3 mb-5 bg-info rounded">
                       {users.user_normal||users.msg? <div><h1 className="text-danger">Please Check email or password</h1></div>:null}
        
                                 <h1 className="text-center text-white">
                                         Login 
                                </h1>
                                <LoginForm  onSubmitLogin={()=>login(formValue,history)} />
                       
                    </div>
                    <div className="col">
                                 
                    </div>
                </div>
              
            }
             <br />
             <br />                  
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
             <br />
            </div>
        )
    }
}
function mapStateToProps({form,users}){
    return {formValue:form.LoginForm?form.LoginForm.values:null,users:users}
}
export default connect(mapStateToProps,{login})(Login)