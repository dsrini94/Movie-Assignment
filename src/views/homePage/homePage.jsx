//importing React Components
import React, { Component } from 'react';

//importing Redux Components
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//importing Actions
import updateState from '../../redux/actions/updateStateData.js'

//importing CSS file
import './homePage.css'

//importing Components
import MovieList from '../../components/movieList/movieList';
import GenereMent from '../../components/generMenu/genereMenu';

class HomePage extends Component {
    
    componentDidMount(){
        fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=b6f123d9800c3e64381818d9e05ac41c&language=en-US&page=1')
            .then(response => response.json())
            .then(data => { this.props.updateState(data,'movies')});
    }

    render(){
        return(
            <div className="homePage">
                <GenereMent />
                <MovieList />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {stateData: state.movieFilter}
  }

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateState: updateState,
    }, dispatch)
  }

export default connect(mapStateToProps, matchDispatchToProps)(HomePage);