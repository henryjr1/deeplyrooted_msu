import React, { Component } from 'react';
import '../styles/About.css';

class About extends Component {
  //Displays the default paragraph for About Page
  render() {
    return (
      <div>
        <div className="aboutpage">
          <h2>About Deeply Rooted</h2>
          <p>Deeply Rooted is a massive digital collection of research material for agriculture in the southeaster United States. Building upon the work of Mississippi State University Libraries, Deeply Rooted seeks to provide digital access to these original archives.
             Deeply Rooted is a sub library of ASERL pulling primarily from MSU Libraries Consortium for the History of Agricultural and Rural Mississippi (CHARM) and plans of using the Digital Public Library of America as a primary discovery platform.
             You may search these archives by subject, rights, title, format, collection, state, language, creator, and date. </p>

          <p>For information on how to contribute to the content of Deeply Rooted please visit MSU's Deeply Rooted <a href="http://lib.msstate.edu/deeplyrooted#specs">contribution page</a>
          </p>
        </div>
      </div>
    );
  }
}

export default About;
