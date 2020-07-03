import React,{Component} from 'react'
import Header from '../component/Header'
import VocabForm from '../Form/VocabForm'
import {connect} from 'react-redux'
import {create_word,word_fetch} from '../action'
import Footer from '../component/Footer'
class Addword extends Component{
    componentDidMount(){
        if (this.props.match.params.id) {
            this.props.word_fetch(this.props.match.params.id)
        }
    }
    render(){
        const {formValue,create_word,match} = this.props
        
        return(
            <div className="container-fluid p-3 mb-2 bg-info ">
                <Header />
                <br />
                {match.path.indexOf('add')>0 &&
                
                <div className="row p-3 mb-2 bg-info">
                    
                        <div className="col">
                                    
                        </div>
                        <div className="col border border-secondary shadow-lg p-3 mb-5 bg-white rounded">
                                    
                                    <h1 className="text-danger">
                                        Add Word
                                    </h1>
                                    <VocabForm onSubmitWord = {()=>create_word(formValue)}/>
                        </div>
                        <div className="col ">
                                    
                        </div>
                    
                </div>
                }
                {match.path.indexOf('edit')>0 &&
                <div className="row">
                <div className="col">
                            
                </div>
                <div className="col border border-secondary shadow-lg p-3 mb-5 bg-white rounded">
                            
                            <h1 className="text-danger">
                                edit Word
                            </h1>
                            <VocabForm onSubmitWord = {()=>create_word(formValue)}/>
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
    return {formValue : form.VocabForm?form.VocabForm.values:null}
}
export default connect(mapStateToProps,{create_word,word_fetch})(Addword)