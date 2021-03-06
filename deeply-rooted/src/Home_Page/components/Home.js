import React, { Component } from 'react';
import logo from '../../Images/deeply-rooted-logo-05.png';
import '../styles/Home.css';

//Code for home page information
class Home extends Component {
  render() {
    return ( // uses deeply rooted logo 
        <div>
          <div className="homepage">
            <h2>Deeply Rooted</h2>
            <img src={logo} alt="Deeply Rooted Logo" />
            <br />
            <br />
            <p>Knowledge. It makes the world grow. It connects people. It helps people achieve their dreams. Deeply Rooted believes in the power of knowledge.  They have a shared digital collection filled with photographs, maps, books, news footages, and other media items. They have a wide range of contributors including Auburn University Libraries, Mississippi State Libraries, University of Kentucky, University of Florida, University of Georgia, and Wake Forrest University. Their goals include bringing in new materials and partners, and connecting people through curation, education, and community.</p>
          </div>
        </div>
    );
  }
}

export default Home;
