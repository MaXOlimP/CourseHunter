let numberOfFilms;


function start (){
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрел?");

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = prompt("Сколько фильмов вы уже посмотрел?");
    }
}

// start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms(){
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
}
// rememberMyFilms();

function detectPersonalLevel(){
    if(personalMovieDB.count < 10){
        console.log("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log("Вы классический зритель");
    } else if(personalMovieDB.count >= 30){
        console.log("Вы киноман");
    } else{
        console.log("Error");
    }

}
// detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.private);

function writeYourGenres(){
for (let i = 1; i <= 3; i++){
    const genre = prompt(`Ваш любимый жанр под номером? ${i}`);
    personalMovieDB.genres[i - 1] = genre;
    }  
}
// writeYourGenres();




// console.log(personalMovieDB);



//     c = prompt("One of the last see a films?"),
//     d = prompt("How you rate this?");

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;















