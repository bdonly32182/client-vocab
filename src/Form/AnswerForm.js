import React ,{Component} from 'react'
import {reduxForm,Field,FieldArray} from 'redux-form'
import {connect} from 'react-redux'
import VocabFormfield from './validForm/VocabFormfield'
class AnswerForm extends Component {
    renderChoice=({fields})=>(
        <ul>
            <button type="button" onClick={() => fields.push({})}className="btn  btn-info" >Add Choic</button>
            {fields.map((choice,i)=>(
                <div key={i+1}>
                    <h4>Choice #{i+1}</h4>
                    <button
                        type="button"
                        title="Remove Member"
                        onClick={() => fields.remove(i)} className="btn  btn-danger float-right">x</button>
                    <div>
                    <Field
                        // label ={`ตัวเลือก${i+1}`}
                        type="text"
                        name={`choice${i+1}`}
                        component={VocabFormfield}
                        />
                    </div>

                </div>
            ))}

        </ul>
    )
    render(){
        const {handleSubmit,onSubmitAdd} = this.props
        return(
            <div>
                <form onSubmit={handleSubmit(onSubmitAdd)}>
                <Field
                label ="คำถาม"
                type="text"
                name="question"
                component={VocabFormfield}
                />
                {/* <FieldArray name="choice" component={this.renderChoice}/> */}
                <Field
                label ="Choice A"
                type="text"
                name="choiceA"
                component={VocabFormfield}
                />
                 <Field
                label ="Choice B"
                type="text"
                name="choiceB"
                component={VocabFormfield}
                />
                 <Field
                label ="Choice C"
                type="text"
                name="choiceC"
                component={VocabFormfield}
                />
                 <Field
                label ="Choice D"
                type="text"
                name="choiceD"
                component={VocabFormfield}
                />
                <Field
                label ="เฉลย"
                type="text"
                name="answer"
                component="select"
                >
                  <option>choiceA</option>  
                  <option>choiceB</option>  
                  <option>choiceC</option>  
                  <option>choiceD</option>  

                </Field>
                <br />
                <label>หมวดหมู่   </label>
                <Field name="class" component="select" >
                        <option>--Select--</option> 
                        <option>Toeic</option> 
                        <option>Toefl</option> 
                        <option>Cu-tep</option> 
                        <option>Tu-gep</option> 

                </Field>
                 <br />
                <button className="btn btn-primary btn-block" >create</button> 

                </form>
            </div>
        )
    }
}
function mapStateToProps ({answers}){
    if (answers && answers._id) {
        return {initialValues:answers}
    }else{
        return {}
    }
}
AnswerForm = reduxForm({form:'AnswerForm'})(AnswerForm)
export default connect(mapStateToProps)(AnswerForm)