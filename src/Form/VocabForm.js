import React,{Component} from 'react'
import {Field,reduxForm} from 'redux-form'
import VocabFormfield from './validForm/VocabFormfield'
import  {connect} from 'react-redux'
class VocabForm extends Component{
    render(){
        const {handleSubmit,onSubmitWord } = this.props
        return(
            <div>
                <form>
                   <Field
                label ="คำศัพท์"
                type="text"
                name="word"
                component={VocabFormfield}
                />
                 <Field
                label ="คำแปล"
                type="text"
                name="mean"
                component={VocabFormfield}
                />
                 <Field
                label ="ประเภทคำ"
                type="text"
                name="category"
                component={VocabFormfield}
                />
                
                 <Field
                label ="คำเหมือน"
                type="text"
                name="wordTosame"
                component={VocabFormfield}
                />
                <label>หมวดหมู่   </label>
                <Field name="class" component="select" >
                        <option>--Select--</option> 
                        <option>Toeic</option> 
                        <option>Toefl</option> 
                        <option>Cu-tep</option> 
                        <option>Tu-gep</option> 

                </Field>
                 <br />
                <button className="btn btn-primary btn-block" onClick={handleSubmit(onSubmitWord)}>create</button> 
                </form>
            </div>
        )
    }
}
function mapStateToProps({words}){
    if (words&&words._id) {
        return {initialValues:words}
    }else{
        return {}
    }
    
}
VocabForm = reduxForm({form:"VocabForm"})(VocabForm)
export default connect(mapStateToProps)(VocabForm)