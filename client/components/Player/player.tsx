import React, { Component, useContext, useState, useEffect, useRef } from 'react';

import Track from '../../models/track';
import {trackList} from '../../testdata'
import { PlayerContext } from '../../contexts/playerContext';
import {TrackQueue} from './trackQueue';
import { TrackContext } from '../../contexts/trackContext';
import {PlayerElement} from './playerElement';
import {useInterval} from '../../hooks';

const Player = ()=>{
    const {playingTrack} = useContext(PlayerContext);
    const {getTrackAudioContext, getAudioContext} = useContext(TrackContext);

    const [visiblity, setVisibility] = useState(false);
    const [playingSource, setPlayingSource] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const [trackInfo, setTrackInfo] = useState({duration: 100, currentTime:0 });

    let timer = setInterval(()=> null, 1000) 

    const addTimer = () =>{
            let {duration, currentTime} = trackInfo;
            if(duration > currentTime){
                let addedTime = currentTime + 1;
                setTrackInfo({ duration: duration, currentTime:addedTime});
            }
    }

    useInterval(()=>{
        if(isPlaying){
            addTimer();
        }
    },1000)

    useEffect(()=>{
        if(playingTrack == null)
            return;
        getTrackAudioContext(playingTrack.songUrl).then(({source, audioContext, gainNode}) =>{
            
            if(playingSource != null){
                if(playingSource.source != null){
                    playingSource.source.stop();
                    playingSource.source.disconnect();
                }
            }
            
            setPlayingSource({source:source,audioContext: audioContext, gainNode: gainNode});
            
            setTrackInfo({duration: source.buffer.duration, currentTime: 0})
            source.start();
            console.log(source.buffer.duration);
            setIsPlaying(true);
        })
        
    }, [playingTrack])

    const changeVolume = (event)=>{
       // console.log(event);
        let gain = (parseInt(event.target.value)  / 10);
        //console.log(gain)
        let {gainNode} = playingSource;
        gainNode.gain.value = gain;
    }

    const togglePlaying = (event) => {
        clearInterval(timer);
        let newPlaying = isPlaying ? false : true;
        setIsPlaying(newPlaying);
        if(isPlaying){
            // Replace audio buffer source node with a copy and destroy this one
            let newSource = playingSource.audioContext.createBufferSource();
            newSource.buffer = playingSource.source.buffer;
            playingSource.source.stop();
            playingSource.source.disconnect();
            newSource.connect(playingSource.gainNode)
            setPlayingSource({source:newSource,audioContext: playingSource.audioContext, gainNode: playingSource.gainNode});
        }else{
            let remaining = trackInfo.duration - trackInfo.currentTime;
            playingSource.source.start(0, trackInfo.currentTime, remaining);
        }
    }

    const seek = (evt)=>{
        var percent = evt.clientX / evt.target.offsetWidth;
        let {duration, currentTime} = trackInfo;
        currentTime = parseInt((percent * duration).toString());

        let newSource = playingSource.audioContext.createBufferSource();
        newSource.buffer = playingSource.source.buffer;
        //playingSource.source.stop();
        playingSource.source.disconnect();
        newSource.connect(playingSource.gainNode)
        setPlayingSource({source:newSource,audioContext: playingSource.audioContext, gainNode: playingSource.gainNode});
        let remaining = trackInfo.duration - trackInfo.currentTime;
        newSource.start(0, trackInfo.currentTime, remaining);
        setIsPlaying(true)
        setTrackInfo({currentTime: currentTime, duration: duration});
        //evt.target.value = percent / 100;
      }

    return playingTrack == null ? (
        <h2>No track playing</h2>
    ) : (
        <div>
        <div className="player">
            <img src={playingTrack.imgUrl} />
            <PlayerElement seek={seek} trackInfo={trackInfo} playing={isPlaying} onVolume={changeVolume} onPlayChange={togglePlaying}/>
            <h2>Now playing {playingTrack.name} by {playingTrack.artist.name}</h2>
            <button className="button is-default" onClick={() => setVisibility(!visiblity)}>Queue</button>
        </div>
        <TrackQueue visible={visiblity}/>
        </ div>
    )
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