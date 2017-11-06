import React from 'react';
import './Header.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import {Popover, ButtonToolbar, OverlayTrigger, Button} from 'react-bootstrap'
var $ = require('jquery')

class Books extends React.Component {
    render() {
      //Get a list of books and display the results to the screen
      const api = this._getBooks();
      return(
        <div>
          <div>
            {api}
          </div>
        </div>
      );
    }
  
    _getBooks() {
      var allBooks = this.props.results.docs;
      var formattedBook = [];      
      var bookObject = {}
      var metaData;
      var data;

      //For each book in results parse throught the data to find relevent information
      for (var i = 0; i < allBooks.length; i++)
      {
        //Sets a default value for each book element
        bookObject = {
          itemNum: 0,
          id: "Unknown",
          title: "Unknown",
          creator: "Unknown",
          collection: "Unknown",
          date: "Unknown",
          description: "Unknown",
          language: "Unknown",
          publisher: "Unknown",
          rights: "Unknown",
          state:  "Unknown",
        };

        //Assigns a numbered value to each book
        bookObject.itemNum = i+1;        
        
        //Parses throught the metaData
        metaData = allBooks[i];        
        if (metaData.hasOwnProperty('sourceResource'))
          data = metaData.sourceResource;

        //Searches for the unique id of the book
        if (metaData.hasOwnProperty('id'))
          bookObject.id = metaData.id;
        
        //Searches for the thumbnail image of the book
        if (metaData.hasOwnProperty('object'))
          bookObject.image = metaData.object;
        
        //Searches for the URL link of the book
        if (metaData.hasOwnProperty('isShownAt'))
          bookObject.link = metaData.isShownAt;

        //Searches for the title of the book
        if (data.hasOwnProperty('title'))
        {
          bookObject.title = data.title[0];
          //If the entire title is not stored at index 0 then use the entire title object
          if(bookObject.title.length == 1)
            bookObject.title = data.title;
        }

        //Searches for the creator of the book
        if (data.hasOwnProperty('creator'))
        {
          bookObject.creator = data.creator[0];
          //If the entire name is not stored at index 0 then use the entire creator object
          if(bookObject.creator.length == 1)
            bookObject.creator = data.creator;
        }

        //Searches for the collection name of the book
        if (data.hasOwnProperty('collection') && data.collection.hasOwnProperty('title'))
          bookObject.collection = data.collection.title; 

        //Searches for the data of the book
        if (data.hasOwnProperty('date') && data.date.hasOwnProperty('displayDate'))
          bookObject.date = data.date.displayDate;

        //Searches for the description of the book
        if (data.hasOwnProperty('description'))
          bookObject.description = data.description[0];

        //Searches for the langauge of the book
        if (data.hasOwnProperty('language') && data.language[0].hasOwnProperty('name'))
          bookObject.language = data.language[0].name;

        //Searches for the publisher of the book
        if (data.hasOwnProperty('publisher'))
        bookObject.publisher = data.publisher[0];

        //Searches for the rights of the book
        if (data.hasOwnProperty('rights'))
        bookObject.rights = data.rights[0];

        //Searches for the state location of the book
        if (data.hasOwnProperty('stateLocatedIn') && data.stateLocatedIn[0].hasOwnProperty('name'))
          bookObject.state = data.stateLocatedIn[0].name;
        
        //Searches a second field for the location of the book in case the previous if statement fails
        else if (!data.hasOwnProperty('stateLocatedIn') && data.hasOwnProperty('spatial'))
          bookObject.state = data.spatial[0].state;

        //Stores all result into an array
        formattedBook[i] = bookObject;
      }

      //TODO: Search trhough formattedBook and delete any entries that have major unknow categories
      
      //Send each element in formattedBooks to the BookDisplay Class
      return formattedBook.map((b) => {
        return (<BookDisplay
                 key={b.id}
                 image={b.image}
                 link={b.link}
                 itemNum={b.itemNum}
                 title={b.title}
                 creator={b.creator}
                 collection={b.collection} 
                 date={b.date}
                 description={b.description}
                 language={b.language}
                 publisher={b.publisher}
                 rights={b.rights}
                 state={b.state}
                 totalResults={allBooks.length}  />
                 );         
        });
      }
  }
  
  class BookDisplay extends React.Component {
    render() { 
      //Creates the popover for the books
      const popoverHoverFocusBottom= (
        <Popover id="popover-trigger-hover-focus" title={this.props.title}>
          <p><b>Author: </b>{this.props.creator}</p>
          <p><b>Description: </b>{this.props.description}</p>
          <p><b>Location:</b> {this.props.state}</p>
          <p><b>Date:</b> {this.props.date}</p>
          <p><b>Publisher:</b> {this.props.publisher}</p>
          <p><b>Collection:</b> {this.props.collection}</p>
          <p><b>Rights:</b> {this.props.rights}</p>
          <p><b>Language:</b> {this.props.language}</p>
        </Popover>
      );
      
      //Switches the popover from displaying below the object to above the object
      var AutoRotate = function(itemNumber, totalItems){
        var orientation = "bottom"; //Sets the default popover orientation        
        var windowHorizontal = $(window).width(); //Finds the size of the current window
        var booksPerRow = Math.floor(windowHorizontal/ 230); //Calculates how many books can be display per row (Window Size/ Amount of Pixel Each Book Takes Up)
        var rotatePoint = totalItems/2; //Default rotatation point is set to the half way book point

        if (booksPerRow >= 7) 
          //If I can display 7 or more books per row then make the rotation point the book at the start of the 3rd row
          rotatePoint = (2*booksPerRow);

        else if (booksPerRow >= 2 && booksPerRow <=6) 
          //If I can display between 6 and 2 books per row then make the rotation point the book at the start of the 4th row
          rotatePoint = (3*booksPerRow);

        else
          //If I can only display one book a row then make the rotation point the 10th book
          rotatePoint = (10*booksPerRow); 

        if (itemNumber > rotatePoint)
          //If the item number is past the rotation point switch the popover orientation
          orientation = "top"; 

        return orientation;         
      }


      return(
        <div className="bookTable2">
          <a href={this.props.link}>
            <OverlayTrigger id="abc" trigger={['hover', 'focus']} placement={AutoRotate(this.props.itemNum, this.props.totalResults)} overlay={popoverHoverFocusBottom}>
              <img className="bookDiv" alt="Book Thumbnail" src={this.props.image} />
              </OverlayTrigger>
          </a>
        </div>
        );
    }
  }

export default Books;
