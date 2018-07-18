import React, { Component } from 'react'
import './App.css';
import MovieRows from './Components/MovieRows'
import $ from 'jquery'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {

    }

    this.performSearch("ant man")
    }

    performSearch(searchTerm) {
      console.log("Perform Search using movieDB")
      const urlString = "https://api.themoviedb.org/3/search/movie?api_key=6154eecda198c2ac2ee3e784b7f8daae&query=" + searchTerm
      var movieRows = []
      $.ajax({
        url: urlString,
        success: ((searchResult) => {
          console.log("Successed to fetch data")
          console.log(searchResult.results)
          const results = searchResult.results
          results.forEach((movie) => {
            movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
            const movieRow = <MovieRows movie={movie} key={movie.id}/>
            movieRows.push(movieRow)
          })
          this.setState({
            rows: movieRows
          })
        }),
        error: (xhr, status, err) => {
          console.log("Failed to fetch data")
        }

      })
    }

  searchChangeHandler(event) {
      console.log(event.target.value)
      const searchTerm = event.target.value
      const boundObject = this
      boundObject.performSearch(searchTerm)
    }

  render() {
    return (
      <div className="App">
        <table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="Movie Searcher Icon"width="50" src="green_app_icon.svg" ></img>
              </td>
              <td width="8"></td>
              <td>
                <h1>Movie Searcher</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input
            style={{
                fontSize: 16,
                display: 'block',
                width: "99%",
                paddingTop: 8,
                paddingBottom: 8,
                paddingLeft: 16,
                border: 0
            }}
            onChange={this.searchChangeHandler.bind(this)}
            placeholder="Enter search term"
          />

        {this.state.rows}
      </div>
    );
  }
}

export default App;
