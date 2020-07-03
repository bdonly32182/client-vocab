import React from 'react'
export default ({label,input,type})=>{
    return(
        <div className="form-group">
                <label>{label}</label>
                <input type={type} {...input} className="form-control"></input>
        </div>
    )
}