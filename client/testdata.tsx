import Track from './models/track';
import Artist from './models/artist';

const artists = {
        coldplay: new Artist("Coldplay", "Alternative")
    }


const trackList: Track[] = [
    new Track("Hypnotized", "Real trip", artists.coldplay, 2016,"http://localhost:3000/audio/Hypnotised.mp3", "https://upload.wikimedia.org/wikipedia/en/d/da/Coldplay_-_Hypnotised.png"),
    new Track("Scientist", "Breakup sucks", artists.coldplay, 2012, "http://localhost:3000/audio/Coldplay_The_Scientist.mp3", "https://upload.wikimedia.org/wikipedia/en/c/c2/Coldplay_-_The_Scientist.png")
]

export {trackList}