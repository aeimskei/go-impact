import React, { Component } from 'react';
import { Jumbotron, Container, Button, Row, Col} from 'reactstrap';

class Home extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
          <h1 className="display-3">Home Page</h1>
          <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.In egestas tellus justo, et tristique lacus volutpat sed.Maecenas gravida sapien non lectus sodales, at tristique purus malesuada.Vivamus finibus metus sed elit efficitur, non ultrices est fringilla.Pellentesque congue vel libero in aliquet.Donec hendrerit erat non nibh rhoncus bibendum.Phasellus lectus sapien, bibendum non purus et, porta dignissim erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Container>
        </Jumbotron>

       <Container>
          <Row>
            <Col sm="4">
              <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.In egestas tellus justo, et tristique lacus volutpat sed.</p>
            </Col>
           <Col sm="4">
              <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.In egestas tellus justo, et tristique lacus volutpat sed.</p>
            </Col>
            <Col sm="4">
              <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.In egestas tellus justo, et tristique lacus volutpat sed.</p>
            </Col>
          </Row>
          <br />
          <Row>
            <div className="col">
              <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.In egestas tellus justo, et tristique lacus volutpat sed.Maecenas gravida sapien non lectus sodales, at tristique purus malesuada.Vivamus finibus metus sed elit efficitur, non ultrices est fringilla.Pellentesque congue vel libero in aliquet.Donec hendrerit erat non nibh rhoncus bibendum.Phasellus lectus sapien, bibendum non purus et, porta dignissim erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home;