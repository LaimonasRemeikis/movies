import {useMovies} from "./hooks";
import {Autocomplete} from "./components";
import {useState} from "react";
import star from './img/star.svg';



const App = () => {
  const [query, setQuery] = useState('');
  const {movies, movie, getMovie} = useMovies(query);
  

  const handleOnSelect = async (movie) => {
    await getMovie(movie.id);
    setQuery(movie.title)
  };

  

  return (
    <div className="app" >
      <header className="header">
        <div className="container">
          <Autocomplete
            onSelect={handleOnSelect}
            query={query}
            onQueryChange={setQuery}
            options={movies}
          />
          
        </div>
      </header>
      {!!movie && (
        <div className="card">
        <main className="main" >
          <div className="Movie">
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            </div>
            <div className="info">
        <h3 className="title">{movie.title} ({movie.release_date ? movie.release_date.substring(0, 4) : '-'})</h3>
        <p className="language">Original language: {movie.original_language.toUpperCase()}</p>
        <div className="vote">
          <img className='starImg' style={{width: '24px', heigth: '24px'}} src={star} alt='star'></img>
            <div>
              <p style={{fontWeight: '700'}}>{movie.vote_average}/10</p>
              <p style={{fontSize: '10px', color: '#a4a4a4'}}>{movie.vote_count} votes</p>
            </div>
        </div>
        <p className='overview'>{movie.overview ? movie.overview : 'No description'}</p>
      </div>
        
        </main>
        </div>
      )}
    </div>
  );
};

export default App;
