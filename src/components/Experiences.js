import React, { Component } from 'react';
import { 
  Jumbotron, 
  Label, 
  Form,
  FormGroup, 
  Input,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button
} from 'reactstrap';

class Experiences extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Experiences</h1>
          <FormGroup row>
            <Label for="search"></Label>
            <Col sm={10}>
            <Input className="mr-2"type="search" name="search" id="search" placeholder="Search your next social impact experience..." />
            </Col>
            <Button >Submit</Button>
          </FormGroup>
        </Jumbotron>
        <Row>
          <Col sm="4">
            <Card body>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardTitle>Experience Name</CardTitle>
              <CardText>What services they provide and how they're impactful.</CardText>
              <Button>Learn more</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardTitle>Experience Name</CardTitle>
              <CardText>What services they provide and how they're impactful.</CardText>
              <Button>Learn more</Button>
            </Card>
          </Col>
          <Col sm="4" className="mb-4">
            <Card body>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardTitle>Experience Name</CardTitle>
              <CardText>What services they provide and how they're impactful.</CardText>
              <Button>Learn more</Button>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <Card body>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardTitle>Experience Name</CardTitle>
              <CardText>What services they provide and how they're impactful.</CardText>
              <Button>Learn more</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardTitle>Experience Name</CardTitle>
              <CardText>What services they provide and how they're impactful.</CardText>
              <Button>Learn more</Button>
            </Card>
          </Col>
          <Col sm="4">
            <Card body>
              <img width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
              <CardTitle>Experience Name</CardTitle>
              <CardText>What services they provide and how they're impactful.</CardText>
              <Button>Learn more</Button>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Experiences;