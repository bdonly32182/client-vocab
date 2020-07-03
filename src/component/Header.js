import React, { Fragment, useState } from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   Container
// } from 'reactstrap';
import {connect} from 'react-redux'
import {find_word,logout} from '../action'
import {Link} from 'react-router-dom'
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={
            search: ""
        }
    }
    onChangeSearch=(e)=>{     
       
      this.setState({search:e.target.value})
    }
    onClickSearch = event =>{
      const {category} = this.props
      event.preventDefault();//ไม่ให้โหลดใหม่เพื่อให้เสตทไม่เปลี่ยน
      this.props.find_word(this.state.search,category)
    }
    onLogout =()=>{
      this.props.logout()
    }
    onClickHome (){
      this.props.history.push('/')
    }
    render(){
      
        return(
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="dropdown">
                      <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Admin Manager
                      </button>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="/" onClick={this.onLogout}>Logout</a>
                        <a className="dropdown-item" href="/" onClick={this.onClickHome}>HOME</a>

                      </div>
                    </div>

                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item active">

                        <Link  to="/listAnswer" className="nav-link">Answer</Link>
                      </li>
                      <li className="nav-item active">
                      <Link  to="/listword" className="nav-link">Word</Link>
                      </li>
               
                     
                    </ul>
                    {this.props.category &&
                    <form className="form-inline my-2 my-lg-0">
                      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"  onChange={this.onChangeSearch.bind(this)}/>
                      <button className="btn btn-outline-success my-2 my-sm-0"  onClick={this.onClickSearch}>Search</button>
                    </form>
                    }
                  </div>
               </nav>

            
        )
    }
}
function mapStateToProps({words}){
return {words:words}
}
export default connect(mapStateToProps,{find_word,logout})(Header)