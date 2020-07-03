import React from 'react';
import {Switch,Route,BrowserRouter} from 'react-router-dom'
import Login from './page/Login';
import ListWord from './page/ListWord';
import ListAnswer from './page/ListAnswer';
import Addword from './page/Addword';
import Addanswer from './page/Addanswer';

class App extends React.Component{
  renderRoute =()=>{
    return(
      <div>
        <Switch>
          <Route exact path="/" component={Login}></Route>
          <Route exact path="/listword" component={ListWord}/>
          <Route exact path="/word/add" component={Addword}/>
          <Route  exact path="/word/edit/:id" component={Addword}/>
          <Route  exact path="/listAnswer" component={ListAnswer}/>
          <Route exact path="/answer/add" component={Addanswer}/>
          <Route exact path="/answer/edit/:id" component={Addanswer}/>
          <Route path="*" component={()=>"404 NOT FOUND"} />

        </Switch>
      </div>
    )
  }
  render(){
    return(
        <div>
          <BrowserRouter>{this.renderRoute()}</BrowserRouter>
        </div>
    )
  }
}

export default App;
