
//importing React Component
import React from 'react';
import ReactDOM from 'react-dom';

//importing Root Component
import App from './App';

//importing Reducer
import movieFilter from './redux/reducers/movieFilter';

//importing Mockdata
import mockMovieData from './mockMovieData.js';
import mockGenreData from './mockGenreData.js';
import mockGenreIdData from './mockGenreIdData.js';
import mockGenreNameData from './mockGenreNameData.js'



it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});


describe('post reducer', () => {
  it('should return the initial state', () => {
    expect(movieFilter(undefined, {})).toEqual({allMovies:[],
      movies:[],
      genres:[],
      genreIds:[],
      genreNames:[]});
  });

  it('post movie data fetch', () => {
    const updateState = {
        method:"updateState",
        type:'movies',
        data:mockMovieData, 
    };
    expect(movieFilter({}, updateState)).toEqual({allMovies:mockMovieData.results,
                                              movies:mockMovieData.results,
                                              genres:undefined,
                                              genreIds:undefined,
                                              genreNames:undefined});
                                          });

  it('post genre data fetch', () => {
    const updateState = {
        method:"updateState",
        type:'generes',
        data:mockGenreData, 
    };
    expect(movieFilter({}, updateState)).toEqual({allMovies:undefined,
                                              movies:undefined,
                                              genres:mockGenreData.genres,
                                              genreIds:mockGenreIdData,
                                              genreNames:mockGenreNameData});
                                          });

  it('After Filtering to All Genre', () => {
    const updateState = {
            method: "selectedGenre",
            data: ['All'],
            type:'', 
    };
    expect(movieFilter({allMovies:mockMovieData.results,
      movies:mockMovieData.results,
      genres:mockGenreData.genres,
      genreIds:mockGenreIdData,
      genreNames:mockGenreNameData}, updateState)).toEqual({allMovies:mockMovieData.results,
                                              movies:mockMovieData.results,
                                              genres:mockGenreData.genres,
                                              genreIds:mockGenreIdData,
                                              genreNames:mockGenreNameData});
                                          });

});