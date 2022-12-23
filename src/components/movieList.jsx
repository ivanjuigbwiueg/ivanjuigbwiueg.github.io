import { Movie } from './movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {movies.length ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h1>Нихуя не найдено</h1>
            )}
        </div>
    );
}

export { Movies };
