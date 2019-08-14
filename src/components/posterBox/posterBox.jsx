//importing React Components
import React, { Component } from 'react';

//importing Semantic Ui Elements
import { Grid, Image } from 'semantic-ui-react';

//importing css
import './posterBox.css'

//importing Redux Components
import {connect} from 'react-redux';

class PosterBox extends Component {
    render(){
        if(this.props.genre){
            var genres = ""
            this.props.genre.forEach((genre) => {
                let genreIndex = this.props.stateData.genreIds.indexOf(genre);
                let genreName = this.props.stateData.genreNames[genreIndex];
                genres += genreName + ' . ';
            }) 
             genres = genres.slice(0, -2);
        }
        return(
            <Grid.Column mobile={8} tablet={8} computer={3}>
                <Image src={this.props.imgPath} />
                <div>
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <h5 className="genre">{genres}</h5>
                             </Grid.Column>
                             <Grid.Column width={6}>
                                <h5 className="rating">Rating {this.props.rating}</h5>
                             </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
                <h3 className="title">{this.props.title}</h3>
            </Grid.Column>
        );
    }
}

function mapStateToProps(state) {
    return {stateData: state.movieFilter}
  }

export default connect(mapStateToProps, null)(PosterBox);