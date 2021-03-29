// for (let i = 0; i < 1; i++) {
//    var numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");
//    if (numberOfFilms == "" || numberOfFilms == null || numberOfFilms.length >= 50) {
//       i--;
//    }    
// }


 
const personalMovieDB = {
   // count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

// if (personalMovieDB.count < 10) {
//    alert('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//    alert('Вы классический зритель');
// } else if (personalMovieDB.count >30 ) {
//    alert('Вы киноман');
// } else {
//    alert('Произошла ошибка'); 
// }

for (let i = 0; i < 2; i++) {
   let a = prompt("Один из последних просмотренных фильмов?", "");
   let b = prompt("На сколько оцените его?", "");
if (a !== 0 && a !== null && a.length <= 50 && b !== 0 && b !== null && b.length <= 50) {
      personalMovieDB.movies[a] = b;
   } else {
      console.log('Error');
      i--;
   }
}
console.log(personalMovieDB);
