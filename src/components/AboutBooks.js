import { Button } from "react-bootstrap";
import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class AboutBooks extends Component {
  render() {
    console.log(this.props.books);
    return (
      <div>
        {this.props.books && (
          <>
            {this.props.books.length > 0 && (
              <>
                {this.props.books.map((item) => {
                  return (
                    <>
                      <Card>
                        <Card.Body>{item.description}</Card.Body>
                        <Card.Body>{item.title}</Card.Body>
                        <Card.Body>{item.status}</Card.Body>
                        <Card.Body>{item.email}</Card.Body>
                        <Card.Body>
                          <Button
                            id={item._id}
                            onClick={(e) => {
                              this.props.deleteUser(e.target.id);
                            }}
                          >
                            delete
                          </Button>
                          <Button
                          style={{marginLeft:"1rem"}}
                            id={item._id}
                            onClick={(e) => {
                              this.props.showUpdateForm(
                                item.email,
                                item.title,
                                item.description,
                                e.target.id,
                                item.status
                              );
                            }}
                          >
                            updat
                          </Button>
                        </Card.Body>
                      </Card>
                      <h1></h1>
                      <h2></h2>
                      <h3></h3>
                      <h3></h3>
                    </>
                  );
                })}
              </>
            )}
          </>
        )}
      </div>
    );
  }
}

export default AboutBooks;
