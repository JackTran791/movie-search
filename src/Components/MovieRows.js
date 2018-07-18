import React from 'react'
import { Button, Table } from 'react-bootstrap'

class MovieRows extends React.Component {

  viewMovie() {
    const url = "https://www.themoviedb.org/movie/" + this.props.movie.id
    window.location.href = url
  }

  render() {
    return (
      <div>
        <Table key={this.props.movie.id}  striped condensed hover>
          <tbody>
            <tr>
              <td>
                <img alt="movie_img"
                  src={this.props.movie.poster_src}
                  className="imgMovie"
                  />
              </td>
              <td>
                <h2>{this.props.movie.title}</h2>
                <p className="overview">{this.props.movie.overview}</p>
                <Button bsStyle="success"
                      onClick={this.viewMovie.bind(this)}
                      className="bttForm"
                      >View</Button>
                <Button bsStyle="success" className="bttForm">Success</Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}

export default MovieRows
