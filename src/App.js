import React from 'react';
import './App.css';
import PopUp from './PopUp.js';
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: []
      
    }

    this.loadMovies = this.loadMovies.bind(this);
   
  }

  componentDidMount() {
    this.loadMovies();
  }


  loadMovies() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=d3a45169518b23f29e8dc58c695490f0&language=en-US&sort_by=popularity.asc&include_adult=true&include_video=true&page=1&vote_count.gte=100&vote_average.lte=4")
      .then(response => {
        return response.json();
      })
      .then(jsonData => {
        console.log(jsonData);
        this.setState({ movies: jsonData.results })
      });
  }
  
  showMoviePoster(movie) {
    return <div className="MovieCard">
            <img src={'https://image.tmdb.org/t/p/w220_and_h330_face' + movie.poster_path} />
      <p>{movie.title} ({movie.vote_average})</p>
      <p><PopUp description={movie.overview} id={"PopUp" + movie.id} /></p>
            </div>
  };
  
  render() {

    let displayPosters = [];
    this.state.movies.forEach((item) => {
      displayPosters.push(this.showMoviePoster(item));
    });

    // use either a forEach or a map, both aren't needed

    return (
      <div className="App-header">
        <div className="App">
          <h1 className="Banner">RWDB</h1>
          <h2>I have loaded {this.state.movies.length} of our idealized Razzie winners? losers? Anyhow, here they are!</h2>
          {displayPosters}
        </div>
      </div>
    );
  }
}
export default App;