import {useMovies} from "./hooks";
import {Autocomplete} from "./components";
import {useState} from "react";

const App = () => {
  const [query, setQuery] = useState('');
  const {movies, movie, getMovie} = useMovies(query);

  const handleOnSelect = async (movie) => {
    await getMovie(movie.id);
  };

  return (
    <div className="app">
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
        <main className="main">
          <div className="container">
            <img alt={movie.title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            {JSON.stringify(movie)}
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
