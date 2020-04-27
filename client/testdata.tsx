import Track from './models/track';
import Artist from './models/artist';

const artists = {
        coldplay: new Artist("Coldplay", "Alternative"),
        akon: new Artist("Akon", "Hip Hop"),
        backstreet: new Artist("Backstreet Boys", "Rock")
    }

const baseAudioUrl = "http://localhost:3000/audio/";

const trackList: Track[] = [
    new Track("Hypnotized", "Real trip", artists.coldplay, 2016,baseAudioUrl + "Hypnotised.mp3", "https://upload.wikimedia.org/wikipedia/en/d/da/Coldplay_-_Hypnotised.png"),
    new Track("Scientist", "Very scientific", artists.coldplay, 2012, "http://localhost:3000/audio/Coldplay_The_Scientist.mp3", "https://upload.wikimedia.org/wikipedia/en/c/c2/Coldplay_-_The_Scientist.png"),
    new Track("Right Now", "Nostalgia Trip", artists.akon, 2002, baseAudioUrl + "Akon - Right Now (Na Na Na).mp3", "https://d2tml28x3t0b85.cloudfront.net/tracks/artwork/09c6c340136011e9a2aa7d7e33940a9b/0a8d6ea0136011e99d7c9bb1d3b22877-49552280_598324553953266_4578413143008477184_n.png"),
    new Track("Beautiful", "Moar Nostalgia Trip", artists.akon, 2002, baseAudioUrl + "Akon - Beautiful ft. Colby O'Donis, Kardinal Offishall.mp3", "https://upload.wikimedia.org/wikipedia/en/0/02/Beautiful_%28Akon_song%29.jpg"),
    new Track("I Want it That Way", "Please tell me why!", artists.backstreet, 1999, baseAudioUrl + "Backstreet Boys - I want it that way (Lyrics).mp3", "https://direct.rhapsody.com/imageserver/images/alb.373863447/500x500.jpg"),
]

export {trackList}