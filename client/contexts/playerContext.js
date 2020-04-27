import React, { Component, createContext, useState, useReducer , useEffect} from 'react'

// Controls the playing track and switching what plays
// Stores the queue state as well

export const PlayerContext = createContext();

const insertAfter = (arr, index, newItem) => [
    ...arr.slice(0, index+1),
    newItem,
    ...arr.slice(index+1)
  ]
  

// State represents the queue array
const queueReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TO_QUEUE':
            return [...state, action.track];
        case 'REMOVE_FROM_QUEUE':
            return state.filter(track=> track.id != action.trackId);
        case 'ADD_TO_NEXT':
            if(action.playingTrack.id == action.track.id)
                return state;
            let index = state.findIndex(t => t.id == action.playingTrack.id);
            if(index == -1)
                return state;
            let updatedState = insertAfter(state, index, action.track)
            return updatedState;
        default:
            return state;
    }
}

const PlayerContextProvider = (props) => {
    const [queue, queueDispatch] = useReducer(queueReducer, []);

    const [playingTrack, setPlayingTrack] = useState(null);

    const inQueue = ()=>{
        let index = queue.findIndex(t => t.id == playingTrack.id)
        return index != -1;
      }

    useEffect(() => {
        if(!inQueue){
            console.log("Hath been removed")
            setPlayingTrack(null);
        }
    }, [queue])

    

    return(
        <PlayerContext.Provider value={{playingTrack, setPlayingTrack, queue, queueDispatch}}>
            {props.children}
        </PlayerContext.Provider>
    )
}

export default PlayerContextProvider;