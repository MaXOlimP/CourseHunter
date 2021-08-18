let numberOfFilms ;
let howMuch = prompt("Сколько фильмов вы уже посмотрел?");
numberOfFilms = howMuch;


let objectA = {};
let genresTab = [];
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: objectA,
    genres: genresTab,
    private: false
};

const a = prompt("One of the last see a films?"),
    b = prompt("How you rate this?"),
    c = prompt("One of the last see a films?"),
    d = prompt("How you rate this?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

function newCheck(){
    let a = 10;
    const b = 100;

};