import React, { Component } from 'react';
import { 
  Container,
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
import SearchForm from './SearchForm';

class Experiences extends Component {

  state = {
    experiences: []
  }
  

  componentWillMount = async () => {
    // const response = await fetch(`${process.env.REACT_APP_API_URL}/experience`) 
    // // console.log('Whats response in componenWillMount: ', response)
    // const responseJson = await response.json()
    // console.log('Whats responseJson: ', responseJson);
    
    this.setState({
      experiences: this.props.history.location.state.result
    })
  }


  onSearchChange = e => {
    this.setState({
      experiences: this.props.history.location.state.result.filter(experience => experience.city.toLowerCase().includes(e.target.value.toLowerCase()))
    });
    console.log('whats this.state.searchCity: ', this.state.searchCity);
    
  }
  
  render() {
  console.log('this.props in expereince', this.props);

    // console.log('Whats this.state now: ', this.state.experience[0]);
    // let {imageUrl} = this.state.experience;
    console.log('whats props history in experiences: ', this.props.history);
    
    return (
      <div>
        <Jumbotron>
          <Container>
            <h1 className="display-3">Experiences</h1>
            <FormGroup row>
              <Label for="search"></Label>
              <Col sm={10}>
              <Input onChange={this.onSearchChange} className="mr-2"type="search" name="search" id="search" placeholder="Search your next social impact experience..." />
              </Col>
              <Button>Submit</Button>
            </FormGroup>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            {this.state.experiences.map(experience => {
              // return <ExperienceCard imageUrl={experience.imageUrl} name={experience.name} description={experience.description} experienceId={experience.id}/>
              return <ExperienceCard history={this.props.history} key={experience.id} experience={experience}/>
            })}
          </Row>
        </Container>
      </div>
    )
  }
}

export default Experiences;