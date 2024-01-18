import './Movie.scss'

function Movie ({ movie }) {
    let {Poster, Title, Year} = movie

    return (<h1 className="movie movie-card">
        <img  className="movie_poster" src={ Poster }/>
        <h3>{ Title }</h3>
        <p>{ Year }</p>
        </h1>)
}

export default Movie;