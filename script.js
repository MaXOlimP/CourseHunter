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


//     c = prompt("One of the last see a films?"),
//     d = prompt("How you rate this?");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

for(let i = 0; i < 2; i++){
    const a = prompt("One of the last see a films?"),
        b = prompt("How you rate this?");

        if (a != null && b != null && a != '' && b != '' && a.length < 50){
    
            console.log('done');
        } else{
            console.log('errors');
            i--;
        }

        personalMovieDB.movies[a]=b;
}

if(personalMovieDB.count < 10){
    console.log("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log("Вы классический зритель");
} else if(personalMovieDB.count >= 30){
    console.log("Вы киноман");
} else{
    console.log("Error");
}



console.log(personalMovieDB);