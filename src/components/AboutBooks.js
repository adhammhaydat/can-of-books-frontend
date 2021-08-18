import { Button } from "react-bootstrap";
import React, { Component } from "react";

export class AboutBooks extends Component {
  render() {
    console.log(this.props.books);
    return (
      <div>
        {this.props.books.length > 0 && (
          <>
            {this.props.books.map((item) => {
              return (
                <>
                  {item.aboutBooks.map((ele) => {
                    return (
                      <>
                        <h1>{ele.description}</h1>
                        <h2>{ele.title}</h2>
                        <h3>{ele.status}</h3>
                        <Button
                          id={ele._id}
                          onClick={(e) => {
                            this.props.deleteUser(e.target.id);
                          }}
                        >
                          delete
                        </Button>
                      </>
                    );
                  })}
                </>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default AboutBooks;
