import React from 'react';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import CircularProgress from 'material-ui/CircularProgress';
import getUserInfo from './gitSearch.js';

class App extends React.Component {
  getChildContext() {
    return {muiTheme: getMuiTheme()};
  }
  constructor(){
    super();
    this.state={
      info:{},
      wait:true
    }
  }
  componentDidMount(){
    getUserInfo().then((data)=>{
      console.log(data.gitInfo);
      this.setState({
        info:data.gitInfo,
        wait:false
      })
    });
  }
  render () {
    let x = <CircularProgress />
    let y =   <div> {this.state.info.following},<img src={this.state.info.avatar_url} /> </div>
    return(
      <div>
      {this.state.wait ? x : y }
      </div>
    )
  }
}

App.childContextTypes = {
  muiTheme: React.PropTypes.object.isRequired,
};

export default App;
