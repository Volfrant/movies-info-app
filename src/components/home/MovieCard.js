import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../../App.css'

export class MovieCard extends Component {
    render() {
        const {movie} = this.props;
        return (
        <div className="col-lg-2 col-md-3 mb-5">
            <div className="card card-body bg-dark text-center h-100">
                <img className="w-100 mb-2" src={movie.Poster} alt="Movie Poster" />
                <h6 className="text-light card-title">{movie.Title} - {movie.Year} </h6>
                <Link className="btn btn-primary" to={'/movie/' + movie.imdbID}> Learn More </Link>
            </div>
        </div>
        )
    }
}

export default MovieCard