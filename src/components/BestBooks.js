import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./BestBooks.css";
import axios from "axios";
import { withAuth0 } from "@auth0/auth0-react";
import AboutBooks from "./AboutBooks";
import BookFormModal from "./BookFormModal";
import DisplayNew from "./DisplayNew";
import InputForm from "./InputForm";

class MyFavoriteBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount = () => {
    if (this.props.auth0.isAuthenticated) {
      this.props.auth0
        .getIdTokenClaims()
        .then((result) => {
          const jwt = result.__raw;
          const config = {
            headers: { Authorization: `Bearer ${jwt}` },
            method: "get",
            baseURL: process.env.REACT_APP_SERVER_URL,
            url: "/auth",
          };
          axios(config)
            .then((axiosResults) => console.log(axiosResults.data))
            .catch((err) => console.error(err));
        })
        .catch((err) => console.error(err));
    }
    const bookApi = `${process.env.REACT_APP_SERVER_URL}/book`;
    axios.get(bookApi).then((response) => {
      // console.log(response.data);
      this.setState({ books: response.data });
      // console.log(this.state.books)
    });
  };
  deleteUser = (userId) => {
    console.log("start");
    let config = {
      method: "delete",
      baseURL: "http://localhost:8000",
      url: `/user-delete/${userId}`,
    };
    axios(config).then((result) => console.log("delete user"));
    console.log("end");
  };

  showUpdateForm = (email, title, discription, userId, status) => {
    this.setState({
      showUpdateForm: true,
      email: email,
      title: title,
      desc: discription,
      userId: userId,
      status: status,
    });
  };
  render() {
    return (
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>This is a collection of my favorite books</p>
        <BookFormModal />
        {this.state.showUpdateForm && (
          <InputForm
            email={this.state.email}
            discription={this.state.desc}
            title={this.state.title}
            userId={this.state.userId}
            status={this.state.status}
          />
        )}
        {this.state.books && (
          <AboutBooks books={this.state.books} deleteUser={this.deleteUser}  showUpdateForm={this.showUpdateForm}/>
          
        )}
       
        <div>
          
          <DisplayNew />
        </div>
      </Jumbotron>
    );
  }
}

export default withAuth0(MyFavoriteBooks);
