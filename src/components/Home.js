import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col} from 'reactstrap';
import Header from './Header';

class Home extends Component {

  render() {
    return (
      <div>
        <Header />
        <Jumbotron fluid>
          <Container>
          <h1 className="display-4">Experience Social Impact</h1>
          <p className="lead">Explore with purpose and meaning. </p>
          </Container>
        </Jumbotron>

       <Container>
          {/* <Row>
            <Col sm="4">
              <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.In egestas tellus justo, et tristique lacus volutpat sed.</p>
            </Col>
           <Col sm="4">
              <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.In egestas tellus justo, et tristique lacus volutpat sed.</p>
            </Col>
            <Col sm="4">
              <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.In egestas tellus justo, et tristique lacus volutpat sed.</p>
            </Col>
          </Row> */}
          <br />
          <Row>
            <div className="col">
              <p className="lead">This is an experimental project to have people post locations of social enterprises that the find as the they travel. This project is a small stepping stone to create a database of these locations. Please feel free to contribute with places you have visited. I hope this project will expand to something more, just a small start for now.</p>
              <p className="lead">
              A social enterprises is a hybrid of a non - profit / NGO and private. A self - sustaining business model that’ s mission driven.
              </p>
              <p className="lead">
              To explore, click on the Experience tab on the navigation bar to see some listed social enterprises.
              </p>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home;