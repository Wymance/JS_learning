"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const lastFilm = prompt("Один из последних просмотренных фильмов?", "");

const lastFilmScore = +prompt("На сколько оцениете его?", "");

const lastFilm1 = prompt("Один из последних просмотренных фильмов?", "");

const lastFilmScore1 = +prompt("На сколько оцениете его?", "");

const count = numberOfFilms;
const movies = {
   lastFilm,
   lastFilmScore
};
const actors = {};
const genres = [];
const privat = false;



const personalMovieDb = [ count, movies, actors, genres, privat];





console.log(`'${lastFilm}' : ${lastFilmScore}`);

console.log(`'${lastFilm1}' : ${lastFilmScore1}`);