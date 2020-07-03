import React from 'react'
import {connect} from 'react-redux'
import Header from '../component/Header'
import {list_answer,delete_answer} from '../action'
let Token = localStorage.getItem('token')

class ListAnswer extends React.Component{
    componentDidMount(){
        this.props.list_answer()
        if (!Token) {
            this.props.history.push('/')
        }
    }
    renderTable =(answers)=>{
        return Array.isArray(answers) ? answers.map((answer,i)=>{
            return(
                <tr key={i+1}>
                <th scope="row">{i+1}</th>
                <td>{answer.question}</td>
                <td>{answer.choiceA}</td>
                <td>{answer.choiceB}</td>
                <td>{answer.choiceC}</td>
                <td>{answer.choiceD}</td>

                <td>{answer.answer}</td>
                
                <td>
                    <button className="btn btn-danger" onClick={()=> this.props.delete_answer(answer._id)}>Delete</button>
                    <button className="btn btn-warning" onClick={()=>this.onEditAnswer(answer._id)}>Edit</button>
                </td>
                </tr>
            )
            
        })
        :(<tr key={1}>
        <th scope="row">{1}</th>

        <td>{answers.question}</td>
        <td>{answers.choiceA}</td>
        <td>{answers.choiceB}</td>
        <td>{answers.choiceC}</td>
        <td>{answers.choiceD}</td>
        <td>{answers.answer}</td>
        
        <td>
            <button className="btn btn-danger" onClick={()=> this.props.delete_answer(answers._id)}>Delete</button>
            <button className="btn btn-warning" onClick={()=>this.onEditAnswer(answers._id)}>Edit</button>
        </td>
        </tr> )
    }
    onEditAnswer =(id)=>{
        this.props.history.push('/answer/edit/'+id)
    }
    render(){
        const {answers} = this.props
        console.log(answers);
        
        return(
            <div>
                <Header />
                <button className="btn-success" onClick={()=>this.props.history.push('/answer/add')}>Create Answer</button>
                <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">ลำดับ</th>
                            <th scope="col">คำถาม</th>
                            <th scope="col">Choice A</th>
                            <th scope="col">Choice B</th>
                            <th scope="col">Choice C</th>
                            <th scope="col">Choice D</th>
                            <th scope="col">เฉลย</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.renderTable(answers)}
                        </tbody>
                </table>
            </div>
        )
    }
}
function mapStateToProps({answers}){
    return {answers:answers}
}
export default connect(mapStateToProps,{list_answer,delete_answer})(ListAnswer)