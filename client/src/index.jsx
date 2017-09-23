import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import RepoListEntry from './components/RepoListEntry.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [],
      searched: 0
    }
  }
  
  componentDidMount() {
    console.log('about to mount!');
    $.ajax({
      type: 'GET',
      url: '/repos',
      dataType: 'json',
      contentType: 'application/json',
      success: (data) => {
        this.setState({repos: data})
      },
    });
  }

  search (term) {
    $.ajax({
      type: 'POST',
      url: '/repos',
      dataType: 'json',
      data: JSON.stringify({
        term: term
      }),
      contentType: 'application/json',
      success: (data) => {
        this.setState({repos:data});
      },
    });
  }

  render () {
    
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));