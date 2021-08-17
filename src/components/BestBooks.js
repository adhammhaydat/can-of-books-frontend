import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from "@auth0/auth0-react";
import AboutBooks from './AboutBooks';


class MyFavoriteBooks extends React.Component {
  constructor(props){
    super(props);
    this.state={
      books:[]

    }
  }

  componentDidMount =  () => {  
    if(this.props.auth0.isAuthenticated) {
       
      this.props.auth0.getIdTokenClaims()
      .then(result => {
        const jwt = result.__raw;
        const config = {
          headers: {"Authorization" : `Bearer ${jwt}`},
          method: 'get',
          baseURL: process.env.REACT_APP_SERVER_URL,
          url: '/auth'
        }
        axios(config)
          .then(axiosResults => console.log(axiosResults.data))
          .catch(err => console.error(err));
      })
      .catch(err => console.error(err));
    }
    const bookApi=`${process.env.REACT_APP_SERVER_URL}/book`;
    axios.get(bookApi).then(response => {
      console.log(response.data[0]);
      let newArr=[];
      response.data.map(ele=>{
        newArr.push(ele)
      })
      this.setState({ books: response.data[0] });
      // console.log(this.state.books)
    })
    
  }    
  render() {
    return(
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        {this.state.books && <AboutBooks books={this.state.books} />}
        <div>
          
        </div>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
