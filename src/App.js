import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';

//ApiKey
import apiKey from './config'

//Components
import SearchForm from './components/SearchForm';
import NavBar from './components/NavBar';
import PhotoContainer from './components/PhotoContainer';
import pageNotFound from './components/pageNotFound';


class App extends Component {

  state = {
    homeImages:[],
    cats:[],
    dogs:[],
    monuments:[],
    searchedResults:[],
    title:"",
    loading:false
  }

  componentDidMount() {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=random&per_page=24&format=json&nojsoncallback=1`)
      .then( response => this.setState({ homeImages: response.data.photos.photo }))
      .catch(err => console.log("There was an error fetching homeImages",err))

    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=cats&per_page=24&format=json&nojsoncallback=1`)
      .then( response => this.setState({ cats: response.data.photos.photo }))
      .catch(err => console.log("There was an error fetching catsImages",err))
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=dogs&per_page=24&format=json&nojsoncallback=1`)
      .then( response => this.setState({ dogs: response.data.photos.photo }))
      .catch(err => console.log("There was an error fetching dogsImages",err))
    
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=monuments&per_page=24&format=json&nojsoncallback=1`)
      .then( response => this.setState({ monuments: response.data.photos.photo }))
      .catch(err => console.log("There was an error fetching monumentsImages",err))
  }

  
  handleSearch = (query) => {
    this.setState({ loading: true })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then (response => this.setState({
      searchedResults: response.data.photos.photo,
      title: query,
      loading:false
    }))
}

  render(){
    return (
      <BrowserRouter>
      
        <div className = "container">
        <NavBar />
        <Switch>

          <Route exact path = "/" render = { () => <PhotoContainer photos = {this.state.homeImages} title = "home" />} />
          <Route path = "/search" render = { () =>
            this.state.loading
            ? <p>Loading...</p>
            :<SearchForm 
              handleSearch = {this.handleSearch} 
              searchedResults = { this.state.searchedResults} 
              title = {this.state.title} /> } />
          <Route path = "/cats" render = { () => <PhotoContainer photos = {this.state.cats} title = "Cats" />} />
          <Route path = "/dogs" render = { () => <PhotoContainer photos = {this.state.dogs} title = "Dogs" />} />
          <Route path = "/monuments" render = { () => <PhotoContainer photos = {this.state.monuments} title = "Monuments" />} />
          <Route path = "/:badUrl" component = {pageNotFound} />
          
        </Switch>
        </div>
      
      </BrowserRouter>
    );
  }
}

export default App;
