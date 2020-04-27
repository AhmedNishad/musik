import React, { createContext ,useContext, useState, useReducer } from 'react'
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
// Contains all the tracks fetches next set of tracks on demand
// Fetch audio as an arraybuffer from server. Serve the response to the player component 

export const TrackContext = createContext();

const TrackContextProvider = (props) =>{
    const getAudioContext =  () => {
        AudioContext = window.AudioContext || window.webkitAudioContext;
        const audioContent = new AudioContext();
        return audioContent;
      };

    const getTrackAudioContext = async (url)=>{
        
        // load audio file from server
        const response = await axios.get(url, {
            responseType: 'arraybuffer',
        });
        // create audio context
        const audioContext = getAudioContext();
        console.log(response.data)
        // create audioBuffer (decode audio file)
        const audioBuffer = await audioContext.decodeAudioData(response.data);

        // create audio source
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;
        
        let gainNode = audioContext.createGain();
        source.connect(gainNode);
        gainNode.connect(audioContext.destination, gainNode);
        
        return {source, audioContext, gainNode};
    }

    return(
        <TrackContext.Provider value={{getTrackAudioContext, getAudioContext}}>
            {props.children}
        </TrackContext.Provider>
    )
}

export {TrackContextProvider};