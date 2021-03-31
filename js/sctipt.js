let numberOfFilms;

function start () {
   numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

   while (numberOfFilms == "" || numberOfFilms == null || numberOfFilms.length >= 50 || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
   }
}

// start ();


const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};

// function detectPersonalLevel() {
//    if (personalMovieDB.count < 10) {
//       alert('Просмотрено довольно мало фильмов');
//    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//       alert('Вы классический зритель');
//    } else if (personalMovieDB.count >30 ) {
//       alert('Вы киноман');
//    } else {
//       alert('Произошла ошибка'); 
//    }
// }

// detectPersonalLevel();

function writeYourGenres () {
   for (let i = 1; i < 4; i++) {           
      const myGenres = prompt(`Ваш любимый жанр под номером ${i}`, "");
      if (myGenres == "" || myGenres == null || myGenres.length >= 50) {
         i--;
      }
      personalMovieDB.genres[i -1] = myGenres;
   } 
}

writeYourGenres ();

//  function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//       let a = prompt("Один из последних просмотренных фильмов?", "");
//       let b = prompt("На сколько оцените его?", "");
//    if (a !== 0 && a !== null && a.length <= 50 && b !== 0 && b !== null && b.length <= 50) {
//          personalMovieDB.movies[a] = b;
//       } else {
//          console.log('Error');
//          i--;
//       }
//    }    
//  }

//  rememberMyFilms ();

function showMyDB (hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDB (personalMovieDB.privat);