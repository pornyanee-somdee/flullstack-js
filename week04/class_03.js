class Media{
    constructor(info){
        this.publishDate = info.publishDate;
        this.name = info.name;
    }
}

class Song extends Media{
    constructor(songDate){
        super(songDate);
        this.artist = songDate.artist;
    }
}
const mySong = new Song({
    artist: "Queen",
    name: "Bohemian Rhapsody", 
    publishDate: 1999,
});

console.log(mySong);
console.log(mySong.name);