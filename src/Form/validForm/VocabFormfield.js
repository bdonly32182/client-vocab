import React from 'react'
export default ({type,label,input})=>{

    return(
        <div className="form-group">
            <label>{label}</label>
            <input type={type} {...input} className="form-control"></input>

        </div>
    )
}