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
                name: 'Sơn Tùng MTP',
                songs: [
                    {name: 'Nơi này có em', duration: 1234}, 
                    {name: 'Không phải dạng vừa đâu', duration: 1236}, 
                    {name: 'Rosa helikopter', duration: 70000}
                ]
            },
            {
                name: 'Quang Hà',
                songs: [
                    {name: 'Beat It', duration: 1234}, 
                    {name: 'Cannelloni Makaroni', duration: 1236}, 
                    {name: 'Rosa helikopter', duration: 70000}
                ]
            },
            {
                name: 'Hồ Ngọc Hà',
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
                <h2 style={{color: DefaultTextColor}}>{Math.round(totalDuration/60)} hours</h2>
            </div>
        );
    }
}

class Filter extends Component{
    render(){
        return(
            <div>
                <img src="" alt=""/>
                <input type="text" name="" id="" onChange={e => this.props.onTextChange(e.target.value)} placeholder="Search..."/>
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
                <h3>{this.props.playlist.name}</h3>
                <ul>
                    {
                        this.props.playlist.songs.map((song, index) => 
                            <li key={index}>{song.name}</li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            serverData: {},
            filterString: ''
        }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({serverData: fakeServerData});
        }, 1000);
        setTimeout(() => {
            this.setState({filterString: ''});
        }, 2000);
    }

    render() {
        console.log(this.state.serverData);
        let playlistToRender = this.state.serverData.user ? this.state.serverData.user.playlists
            .filter(playlist =>
                playlist.name.toLowerCase().includes(
                    this.state.filterString.toLowerCase())
        ) : []

        return (
            <div className="App uk-container">
                {this.state.serverData.user ?
                    <div>
                        <h1>
                            {this.state.serverData.user.name}'s Playlists
                        </h1>
                        <PlaylistCounter playlists={playlistToRender} />
                        <HoursCounter playlists={playlistToRender} />
                        <Filter onTextChange={text => this.setState({filterString: text})} />
                        {playlistToRender.map((playlist, index) => {
                            return <Playlist key={index} playlist={playlist} />;
                        })}
                    </div> : <button onClick={() => {window.location='http://localhost:8888/login'}} className="uk-button uk-button-default">Sign in with Spotify</button>
                }
            </div>
        );
    }
}

export default App;