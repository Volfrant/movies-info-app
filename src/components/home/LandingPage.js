import React, { Component } from 'react'
import SearchForm from './SearchForm'
import {connect} from 'react-redux'
import MoviesContainer from './MoviesContainer'
import Spinner from '../layout/Spinner'
import './Home.css'
import '../../App.css'

export class LandingPage extends Component {
    render() {
        const {loading} = this.props;
        return (
            <div className="container-fluid p-0">
               <SearchForm />
                {loading ? <Spinner/> : <MoviesContainer/>}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.movies.loading
})
export default connect(mapStateToProps)(LandingPage)
