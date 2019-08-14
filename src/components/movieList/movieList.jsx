//importing React Components
import React, { Component } from 'react';

//importing Semantic Ui Elements
import { Grid } from 'semantic-ui-react'

//importing Redux Components
import {connect} from 'react-redux';

//importing components 
import PosterBox from '../posterBox/posterBox'

//importing css
import './movieList.css'
class MovieList extends Component {

    render(){
        console.log(this.props.stateData.movies);
        if(this.props.stateData.movies.length > 0){
            return(
                <Grid padded>
                    <Grid.Row columns={5}>
                        {
                            this.props.stateData.movies.map((movie,key)=>{
                                var imgPath = "http://image.tmdb.org/t/p/w342" + movie.poster_path;
                                return(
                                    <PosterBox imgPath={imgPath} title={movie.title} key={key} rating={movie.vote_average} genre={movie.genre_ids}/>
                                );
                             })   
                        }                  
                    </Grid.Row>
    
                </Grid>
            );
        }
        else{
            return(
                <div>
                    <h1 className="alertMsg">Sorry! No Movies to show</h1>
                </div>);
        }
       
        
    }
}

function mapStateToProps(state) {
    return {stateData: state.movieFilter}
  }

export default connect(mapStateToProps, null)(MovieList);