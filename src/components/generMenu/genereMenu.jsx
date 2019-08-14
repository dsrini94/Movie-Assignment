//importing React Components
import React, { Component } from 'react';

//importing Redux Components
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//importing css
import './genereMenu.css'

//importing Actions
import updateState from '../../redux/actions/updateStateData'
import selectedGenre from '../../redux/actions/selectedGenere'
import selectedRating from '../../redux/actions/selectedRating'

//importing Semantic Ui Elements
import { Menu, Image, Dropdown, Segment, Grid } from 'semantic-ui-react';

import RRS from 'react-responsive-select';
import "react-responsive-select/dist/ReactResponsiveSelect.css";

const ratingOption = [
    {
      key: '1',
      text: '1',
      value: '1',
    },
    {
      key: '2',
      text: '2',
      value: '2',
    },
    {
      key: '3',
      text: '3',
      value: '3',
    },
    {
      key: '4',
      text: '4',
      value: '4',
    },
    {
      key: '5',
      text: '5',
      value: '5',
    },
    {
      key: '6',
      text: '6',
      value: '6',
    },
    {
      key: '7',
      text: '7',
      value: '7',
    },
    {
      key: '8',
      text: '8',
      value: '8',
    },
    {
        key: '9',
        text: '9',
        value: '9',
      },
      {
        key: '10',
        text: '10',
        value: '10',
      },
    
  ]

class GenereMenu extends Component {

    constructor(props){
        super(props);
        this.state = {
          make1: {
            options: [
              {
                value: 'All',
                text: 'All'
              }
            ]
          },
          make2:{
            options: [
              {
                value: '1',
                text: '1'
              }
            ]
          }
        }
        this.handleGenreChange = this.handleGenreChange.bind(this);
        this.handleRatingChange = this.handleRatingChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=b6f123d9800c3e64381818d9e05ac41c&language=en-US')
            .then(response => response.json())
            .then(data => { 
                this.props.updateState(data,'generes')});
    }

    //event listner for the dropdown component
    handleGenreChange(e,data){
        this.props.selectedGenre(data.value);
    }

    handleRatingChange(newValue){
      console.log(newValue);
        this.props.selectedRating(newValue.value)
    }

    handleChange(newValue){
      var genreArray = [];
        newValue.options.forEach((genre)=>{
            genreArray.push(genre.value);
        })
        this.props.selectedGenre(genreArray);
    }

    render(){
      const { make1, make2 } = this.state;
           //creating an array of objects which can be fed dropdown component

           var movieOptions = this.props.stateData.genres.map((genres,key) => {
               return {
                    key: key,
                    text: genres.name,
                    value: genres.name,
               }
           })

        return(
          <Grid>
            <Grid.Row>
              <Grid.Column width={16} >
                <Segment inverted className="menuBar">
                <Menu secondary>
                    <Menu.Item>
                        <Image src="http://social.joyetech.com/attachment.php?thumbnail=1518" size="mini"/>
                    </Menu.Item>

                    <Menu.Item >
                        <h3 className="webName">Movies</h3>
                    </Menu.Item>

                    <Menu.Item position='right'>
                    <form className="genreMenu">
                    <RRS
                        key="make1"
                        multiselect
                        name="make1"
                        options={movieOptions}
                        selectedValues={make1.options.map(option => option.value)}
                        onChange={this.handleChange}
                      />
                      </form>
                      </Menu.Item>
                       <Menu.Item >
                      <form className="ratingMenu">
                        <RRS
                            key="make2"
                            name="make2"
                            options={ratingOption}
                            selectedValues={make2.options.map(option => option.value)}
                            onChange={this.handleRatingChange}
                          />
                      </form>

                    </Menu.Item>
                    <Menu.Item >
                    </Menu.Item>
                </Menu>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        
        );
    }
}

function mapStateToProps(state) {
    return {stateData: state.movieFilter}
  }

  function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        updateState: updateState,
        selectedGenre: selectedGenre,
        selectedRating: selectedRating
    }, dispatch)
  }

  export default connect(mapStateToProps, matchDispatchToProps)(GenereMenu);