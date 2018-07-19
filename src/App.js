import React, { Component } from 'react';
import './App.css';

let DefaultTextColor = '#fff';
let fakeServerData = {
    user: {
        name: 'David',
        playlists: [
            {
                name: 'My favorites',
                songs: ['Beat It', 'Cannelloni Makaroni', 'Rosa helikopter']
            },
            {
                name: 'Em ơi',
                songs: ['Beat It', 'Cannelloni Makaroni', 'Rosa helikopter']
            },
            {
                name: 'Anh không đòi quà',
                songs: ['Beat It', 'Cannelloni Makaroni', 'Rosa helikopter']
            }
        ]
    }
};

class Aggregate extends Component{
    render(){
        return(
            <div className="aggregate" style={{width: '40%', display: 'inline-block'}}>
                <h2 style={{color: DefaultTextColor}}>{this.props.playlists && this.props.playlists.length} Text</h2>
            </div>
        );
    }
}

class Filter extends Component{
    render(){
        return(
            <div>
                <img src="" alt=""/>
                <input type="text" name="" id="" placeholder="Search..."/>
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

    constructor(props){
        super(props);
        this.state = {
            serverData: {

            }
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({serverData: fakeServerData});
        }, 1000);
    }

    render() {
        console.log(this.state.serverData);
        return (
            <div className="App uk-container">
                {this.state.serverData.user ?
                    <div>
                        <h1>
                            {this.state.serverData.user.name}'s Playlists
                        </h1>
                        <Aggregate playlists={this.state.serverData.user.playlists} />
                        <Aggregate />
                        <Filter />
                        <Playlist />
                        <Playlist />
                        <Playlist />
                        <Playlist />
                    </div> : 'Loading...'
                }
            </div>
        );
    }
}

export default App;