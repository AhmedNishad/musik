import Artist from './artist';

export default class Track{
    name;
    description;
    songUrl;
    imgUrl;
    artist: Artist;
    releaseYear;
    
    constructor(name, description, artist, releaseYear, songUrl, imgUrl){
        this.name = name;
        this.description = description;
        this.artist = artist;
        this.songUrl = songUrl;
        this.imgUrl = imgUrl;
        this.releaseYear = releaseYear;
    }


}