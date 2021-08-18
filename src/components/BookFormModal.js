import axios from "axios";
import React, { Component } from "react";
import DisplayNew from "./DisplayNew";
import AboutBooks from "./AboutBooks";
import InputForm from "./InputForm";

export class BookFormModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      status: "",
      email: "",
      bookData: [],
      showUpdateForm: false,
      userId: "",
    };
  }
  handlerTitel = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  handlerDisc = (e) => {
    this.setState({
      disc: e.target.value,
    });
  };
  handlerStutus = (e) => {
    this.setState({
      status: e.target.value,
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    let data = {
      title: this.state.title,
      desc: this.state.disc,
      status: this.state.status,
    };
    let config = {
      method: "post",
      baseURL: "http://localhost:8000",
      url: "/user-input",
      data: data,
    };
    axios(config).then((result) => {
      console.log(result.data);
      let bookData = this.state.bookData;
      bookData.push(result.data);
      this.setState({
        bookData: bookData,
      });
    });
  };
  handlerEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
 
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.handelSubmit(e);
          }}
        >
          <input
            type="text"
            placeholder="enter the title"
            onChange={(e) => {
              this.handlerTitel(e);
            }}
          />
          <input
            type="text"
            placeholder="enter the description"
            onChange={(e) => {
              this.handlerDisc(e);
            }}
          />
          <input
            type="text"
            placeholder="enter the status"
            onChange={(e) => {
              this.handlerStutus(e);
            }}
          />
          <input
            type="text"
            placeholder="enter the Email"
            onChange={(e) => {
              this.handlerEmail(e);
            }}
          />
          <input type="submit" />
        </form>
        

        <DisplayNew
          title={this.state.title}
          discription={this.state.disc}
          status={this.state.status}
          email={this.state.email}
        />
      </div>
    );
  }
}

export default BookFormModal;
