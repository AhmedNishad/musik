import React, { Component } from 'react';

import Track from '../../models/track';
import {trackList} from '../../testdata'

class Player extends Component {

    state:PlayerState;

    constructor(props){
        super(props);
    }
}

enum PlayerStatus{
    Playing,
    Pause
}

interface PlayerState{
    status: PlayerStatus,
    track: Track
}


export default Player;