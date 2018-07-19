import React, { Component } from 'react';
import './App.css';

let DefaultTextColor = '#fff';

class Aggregate extends Component{
    render(){
        return(
            <div className="aggregate" style={{width: '40%', display: 'inline-block'}}>
                <h2 style={{color: DefaultTextColor}}>Number text</h2>
            </div>
        );
    }
}

class Filter extends Component{
    render(){
        return(
            <div>
                <img src="" alt=""/>
                <input type="text" name="" id=""/>
                <button>Filter</button>
            </div>
        );
    }
}

class Playlist extends Component{
    render(){
        return(
            <div style={{width: '25%', display: 'inline-block'}}>
                <img src="" alt=""/>
                <h3>Playlist Name</h3>
                <ul>
                    <li>Song 1</li>
                    <li>Song 2</li>
                    <li>Song 3</li>
                    <li>Song 4</li>
                </ul>
            </div>
        );
    }
}

class App extends Component {

    render() {
        return (
            <div className="App container">
                <h1>Title</h1>
                <Aggregate />
                <Aggregate />
                <Filter />
                <Playlist />
                <Playlist />
                <Playlist />
                <Playlist />
            </div>
        );
    }
}

export default App;