module.exports = (state = {
    allMovies:[],
    movies:[],
    genres:[],
    genreIds:[],
    genreNames:[]
},action) => {
    switch(action.method) {
        case 'rating':
             let movieList = state.allMovies.filter((movie) => movie.vote_average >= parseInt(action.data));
             return {
                allMovies: state.allMovies,
                movies: movieList,
                genres: state.genres,
                genreIds: state.genreIds,
                genreNames: state.genreNames
              }
              
        break; 
        case 'selectedGenre':

             if(action.data[0] !== 'All') {
              let movieList = [];
              state.allMovies.forEach((movie) => {
                      movie.genre_ids.forEach((id)=>{
                        let genreIdIndex = state.genreIds.indexOf(id);
                        let genreName = state.genreNames[genreIdIndex];

                        if(action.data.includes(genreName)){
                            let found = movieList.some(item => item.title === movie.title)
                            if(!found)
                                 movieList.push(movie);
                        }
                    })
              })  

              return {
                allMovies: state.allMovies,
                movies: movieList,
                genres: state.genres,
                genreIds: state.genreIds,
                genreNames: state.genreNames
              }
            }
            else{
                return {
                    allMovies: state.allMovies,
                    movies: state.allMovies,
                    genres: state.genres,
                    genreIds: state.genreIds,
                    genreNames: state.genreNames
                  }
            }

        break;
        case 'updateState':
            if(action.type === 'movies')
            {  
               //sorting the data based on the popularity
               var sortedArray = action.data.results.sort( function ( a, b ) { return b.popularity - a.popularity; } );

                return {
                    allMovies: sortedArray,
                    movies: action.data.results,
                    genres: state.genres,
                    genreIds: state.genreIds,
                    genreNames: state.genreNames
                }
            }
            else{

                var genreIds = [], genreNames = [];
                action.data.genres.unshift({'id':0,'name':'All'})
                action.data.genres.forEach((genre,index) => {
                     genreIds[index] = genre.id;
                     genreNames[index] = genre.name;
                 })

                return {
                    allMovies: state.allMovies,
                    movies: state.movies,
                    genres: action.data.genres,
                    genreIds: genreIds,
                    genreNames: genreNames
                }
            }
            
        break;
    }
    return state;
}