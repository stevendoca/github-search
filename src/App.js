import React, {Component} from 'react';
import './App.css';
import './components/layouts/Navbar.js'
import Navbar from './components/layouts/Navbar.js';
import User from './components/Users/User.js';
import Search from './components/Users/Search';
import Alert from './components/layouts/Alert'
import axios from 'axios'

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null
  }
 
  searchUsers = async (text) => {
    this.setState({loading: true})
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=$
    {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
    {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({users: res.data.items, loading: false})
  }

  clearUsers = () => {
    this.setState({
      users:[],
      loading: false
    })
  }

  setAlert = (msg, type) => {
    this.setState({alert: {msg: msg, type: type}})
    setTimeout (() => {
      this.setState({alert: null})
    }, 5000)
  }
 
  render(){
    const { users, loading } = this.state
    return (
      <div className="App">
        <Navbar/>
        <div className="container mt-4" >
          <Alert alert={this.state.alert}/>
          <div>
            <Search
            searchUsers= {this.searchUsers} 
            clearUsers={this.clearUsers} 
            showClear={users.length > 0 ? true:false}
            setAlert={this.setAlert}/>
          </div>
          
          <User loading= {loading} users= {users}/>
        </div>
      </div>
    );
  } 
}

export default App;
