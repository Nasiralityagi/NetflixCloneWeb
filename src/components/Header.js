import React from 'react';

import { ReactComponent as Play } from '../static/images/play-button.svg';
import { ReactComponent as Add } from '../static/images/plus.svg';

export default function Header(props) {
    const backgroundStyle = {
        backgroundSize: 'cover',
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${props.movie.backdrop_path})`,
        backgroundPosition: 'center',
    };

    return (
        <header style={backgroundStyle} className="header">
            <div className="header__container">
                <h1 className="header__container-heading">{props.movie.name}</h1>
                <button
                    onClick={() => alert('Not a Movie!')}
                    className="header__container-btnPlay">
                    <Play className="header__container-btnMyList-play" />
                  Play
                </button>
                <button className="header__container-btnMyList">
                    <Add className="header__container-btnMyList-add" />
                  My List
                </button>
                <p className="header__container-overview">{props.movie.overview}</p>
            </div>
            <div className="header--fadeBottom" />
        </header>
    );
}

