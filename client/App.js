import React from 'react';
import TrackList from './components/Tracklist/tracklist';
import Player from './components/Player/player';
import AuthContextProvider from './contexts/authContext';
import PlayerContextProvider from './contexts/playerContext';
import { TrackContextProvider } from './contexts/trackContext';

function App(){
    return (
        <div className="App">
            <AuthContextProvider>
                <PlayerContextProvider>
                    <TrackContextProvider>
                        <TrackList />
                        <Player />
                    </TrackContextProvider>
                </PlayerContextProvider>
            </AuthContextProvider>
        </div>
    )
}

export default App;