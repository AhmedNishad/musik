import Artist from './artist';
import { v1 as uuidv1 } from 'uuid';

export default class Track{
    name;
    description;
    songUrl;
    imgUrl;
    artist: Artist;
    releaseYear;
    id;
    
    constructor(name, description, artist, releaseYear, songUrl, imgUrl){
        this.name = name;
        this.description = description;
        this.artist = artist;
        this.songUrl = songUrl;
        this.imgUrl = imgUrl;
        this.releaseYear = releaseYear;
        this.id = uuidv1();
    }


}