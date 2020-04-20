export default class Artist{
    name;
    genre;
    imageUrl="#";

    constructor(name, genre){
        this.name = name;
        this.genre = genre;
    }

    setImgUrl(url){
        this.imageUrl = url;
    }
}