import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

//ApiKey
import apiKey from './config'

//Components
import SearchForm from './components/SearchForm';
import NavBar from './components/NavBar';
import PhotoContainer from './components/PhotoContainer';


class App extends Component {

  state = {
    images:[],
    cats:[],
    dogs:[],
    monuments:[],
    searchedResults:[]
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=random&per_page=24&format=json&nojsoncallback=1`)
      .then( response => this.setState({ images: response.data.photos.photo }))

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
    .then( response => this.setState({ cats: response.data.photos.photo }))
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
    .then( response => this.setState({ dogs: response.data.photos.photo }))
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=monuments&per_page=24&format=json&nojsoncallback=1`)
    .then( response => this.setState({ monuments: response.data.photos.photo }))
  }

  
  handleSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then (response => this.setState({ searchedResults: response.data.photos.photo, title: query }))
}

  render(){
    return (
      <BrowserRouter>
      
        <div className = "container">
        <NavBar />
        <Switch>
          <Route exact path = "/" render = { () => <PhotoContainer photos = {this.state.images} title = "home" />} />
          <Route path = "/search" render = { () => <SearchForm handleSearch = {this.handleSearch} searchedResults = { this.state.searchedResults} /> } />
          <Route path = "/cats" render = { () => <PhotoContainer photos = {this.state.cats} title = "Cats" />} />
          <Route path = "/dogs" render = { () => <PhotoContainer photos = {this.state.dogs} title = "Dogs" />} />
          <Route path = "/monuments" render = { () => <PhotoContainer photos = {this.state.monuments} title = "Monuments" />} />
        </Switch>
        </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
