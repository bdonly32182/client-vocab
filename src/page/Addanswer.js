import React,{Component} from 'react'
import Header from '../component/Header'
import {connect} from 'react-redux'
import {create_answer,answer_fetch, create_word} from '../action'
import AnswerForm from '../Form/AnswerForm'
class Addanswer extends Component{
    componentDidMount(){
        if (this.props.match.params.id) {
            this.props.answer_fetch(this.props.match.params.id)
        }
    }
    render(){
        const {formValue,create_answer,match} = this.props
        // console.log(formValue);
        
        return(
            <div className="container-fluid p-3 mb-2 bg-info ">
                <Header />
                <br />
                {match.path.indexOf('add')>0 &&
                
                <div className="row">
                    
                        <div className="col">
                                    
                        </div>
                        <div className="col border border-secondary shadow-lg p-3 mb-5 bg-white rounded">
                                    
                                    <h1 className="text-danger">
                                        Add Answer
                                    </h1>
                                    <AnswerForm onSubmitAdd ={()=> create_answer(formValue)}/>
                        </div>
                        <div className="col">
                                    
                        </div>
                    
                    
                </div>
                }
                {match.path.indexOf('edit')>0 &&
                <div className="row">
                <div className="col">
                            
                </div>
                <div className="col border border-secondary shadow-lg p-3 mb-5 bg-white rounded">
                            
                            <h1 className="text-danger">
                                edit Answer
                            </h1>
                            <AnswerForm onSubmitAdd ={()=> create_answer(formValue)}/>

                </div>
                <div className="col">
                            
                </div>
            
            
        </div>
                }
                <br />
                <br />
                <br />
            </div>
        )
    }
}
function mapStateToProps({form}){
    return {formValue : form.AnswerForm?form.AnswerForm.values:null}
}
export default connect(mapStateToProps,{create_answer,answer_fetch})(Addanswer)