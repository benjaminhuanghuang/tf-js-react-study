import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="/">React + TF.js</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li><Link exact activeClassName="activeNav" to="/">Linnear</Link></li>
                            <li><Link activeClassName="activeNav" to="/digitalProdictor">Digital Prodictor</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Header;