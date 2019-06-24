import React from 'react'
import '../../App.css'
import {Link} from 'react-router-dom'

function Navbar() {
    return (
      <div>
        <nav className="navbar navbar-light md-5">
          <div className="container">
            <div className="navbar-header  ">
              <Link className="navbar-brand text-white" to="/"><img alt="logo" style={{width:"200px"}} className="logo"  src={require('./film.png')}/></Link>
					  </div>
          </div>
        </nav>  
      </div>
    )
}

export default Navbar




