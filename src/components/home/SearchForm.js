import React, { Component } from 'react';
import {connect} from 'react-redux'
import {searchMovie, fetchMovies, setLoading} from '../../actions/searchActions'

export class SearchForm extends Component {
	onChange = e => {
		this.props.searchMovie(e.target.value);
	};

	onSubmit = e => {
		e.preventDefault();
		this.props.fetchMovies(this.props.text);
		this.props.setLoading();
	}

	render() {
		return (
		<div className = "jumbotron jumbotron-fluid text-center">
    	<div className = "container">
    	<form id="searchForm" onSubmit={this.onSubmit}>
    	<input type="text" className="form-control" name="searchText" placeholder="Search Movies, TV Series ..." onChange = {this.onChange}></input><i className="fa fa-search"></i>
		<button type="submit" className="btn btn-primary btn-block btn-bg mt-3">SEARCH</button>
		</form>
    	</div>
    	</div>
		)
	}
}

const mapStateToProps = state => ({
	text: state.movies.text
});

export default connect(mapStateToProps, {searchMovie,fetchMovies, setLoading}) (SearchForm);
