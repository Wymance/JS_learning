

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

while (numberOfFilms == 0 || numberOfFilms == null || numberOfFilms.length >= 50) {   
   numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
}

console.log(numberOfFilms);
 
const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

if (personalMovieDB.count < 10) {
   alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
   alert('Вы классический зритель');
} else if (personalMovieDB.count >30 ) {
   alert('Вы киноман');
} else {
   alert('Произошла ошибка'); 
}



for (let i = 1; i < 3; i++) {
   let a = prompt("Один из последних просмотренных фильмов?", "");
   while (a == 0 || a == null || a.length >= 50) {
       a = prompt("Один из последних просмотренных фильмов?", "");
   }
   let b = prompt("На сколько оцените его?", "");  
   personalMovieDB.movies[a] = b;
} 


console.log(personalMovieDB);
