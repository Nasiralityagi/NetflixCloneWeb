import MovieGenre from './components/Movie/Movie';
import React from 'react';
import Movie from './components/Movie/Movie';
const API_KEY = 'e67ed1fb32fd5b2f36daffeb8d318bba';

export default function getMovieRows(movies, url){
    const movieRow = movies.map((movie) => {
        let movieImageUrl = 'https://image.tmdb.org/t/p/w500/'+movie.backdrop_path;
        if(
            url === `/discover/tv?api_key=${API_KEY}&with_networks=213`
        ){
            movieImageUrl = 'https://image.tmdb.org/t/p/original/' + movie.poster_path;
        }

        if(movie.poster_path && movie.backdrop_path !== null){
            const movieComponent = (
                <img
                 src={movieImageUrl} style={{width=100, height=150}}>
                </img>
            );
            return movieComponent;
        }
    });

    return movieRow;
}