// // let str = "23";
// // let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));
// console.dir([1,2,3]);

// const solider ={
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//             console.log("Hello");
//     }
// };

// const jonh ={
//     health: 100
// };

// jonh.__proto__ = solider;

// // console.log(jonh.armor);
// jonh.sayHello();



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрел?', '');

        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрел?', '');
        }
},
    rememberMyFilms: function(){
        for (let i = 0; i < 2; i++){
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('How you Rate this films?','');

                if(a !=null && b != null && a != '' && b != '' && a.length<50){
                    personalMovieDB.movies[a] = b;
                    console.log('done');
                } else{
                    console.log('error');
                    i--;
                }
        }
    },
    detectPersonalLevel: function(){
        if(personalMovieDB.count < 10){
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30){
            console.log("Вы киноман");
        } else{
            console.log("Произошла ошибка");
        }
    },
    showMyDB: function(hidden){
        if (!hidden){
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function(){
        if(personalMovieDB.private){
            personalMovieDB.private = false;
        }else{
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function(){
        for(let i = 1; i<=3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if(genre === '' || genre == null){
                console.log('');
                i--;
            }else{
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`любимый жанр ${i + 1} - это ${item}`);
        });
    }
    

};