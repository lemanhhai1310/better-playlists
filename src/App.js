import React, { Component } from 'react';
import './App.css';

let DefaultTextColor = '#fff';
let fakeServerData = {
    user: {
        name: 'David',
        playlists: [
            {
                name: 'My favorites',
                songs: [
                    {name: 'Beat It', duration: 1234}, 
                    {name: 'Cannelloni Makaroni', duration: 1236}, 
                    {name: 'Rosa helikopter', duration: 70000}
                ]
            },
            {
                name: 'Em ơi',
                songs: [
                    {name: 'Beat It', duration: 1234}, 
                    {name: 'Cannelloni Makaroni', duration: 1236}, 
                    {name: 'Rosa helikopter', duration: 70000}
                ]
            },
            {
                name: 'Anh không đòi quà',
                songs: [
                    {name: 'Beat It', duration: 1234}, 
                    {name: 'Cannelloni Makaroni', duration: 1236}, 
                    {name: 'Rosa helikopter', duration: 70000}
                ]
            }
        ]
    }
};

class PlaylistCounter extends Component{
    render(){
        return(
            <div className="aggregate" style={{width: '40%', display: 'inline-block'}}>
                <h2 style={{color: DefaultTextColor}}>{this.props.playlists && this.props.playlists.length} playlist</h2>
            </div>
        );
    }
}

class HoursCounter extends Component{
    render(){
        let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
            return songs.concat(eachPlaylist.songs);
        },[]);
        let totalDuration = allSongs.reduce((sum, eachSong) => {
            return sum + eachSong.duration
        }, 0);
        return(
            <div className="aggregate" style={{width: '40%', display: 'inline-block'}}>
                <h2 style={{color: DefaultTextColor}}>{allSongs.length} hours</h2>
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
                        <PlaylistCounter playlists={this.state.serverData.user.playlists} />
                        <HoursCounter />
                        <Filter />
                        <Playlist />
                        <Playlist />
                        <Playlist />
                        <Playlist />
                    </div> : <div style={{height: '100vh'}} className="uk-flex uk-flex-center uk-flex-middle"><h1 className="uk-text-center">Loading...</h1></div>
                }
            </div>
        );
    }
}

export default App;