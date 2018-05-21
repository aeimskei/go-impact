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
import ExperienceCard from './ExperienceCard';

class Experiences extends Component {

  state = {
    experiences: [
      {imageUrl: ''}
    ]
  }

  componentWillMount = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/experience`) 
    // console.log('Whats response in componenWillMount: ', response)
    const responseJson = await response.json()
    console.log('Whats responseJson: ', responseJson);
    this.setState({experiences: responseJson.result})
  }
  

  render() {
    // console.log('Whats this.state now: ', this.state.experience[0]);
    // let {imageUrl} = this.state.experience;

    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">Experiences</h1>
          <FormGroup row>
            <Label for="search"></Label>
            <Col sm={10}>
            <Input className="mr-2"type="search" name="search" id="search" placeholder="Search your next social impact experience..." />
            </Col>
            <Button>Submit</Button>
          </FormGroup>
        </Jumbotron>
        <Row>
          {this.state.experiences.map(experience => {
            return <ExperienceCard imageUrl={experience.imageUrl} name={experience.name} description={experience.description}/>
          })}
        </Row>
      </div>
    )
  }
}

export default Experiences;