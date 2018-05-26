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
  

  componentDidMount = async () => {
    // const response = await fetch(`${process.env.REACT_APP_API_URL}/experience`) 
    // // console.log('Whats response in componenWillMount: ', response)
    // const responseJson = await response.json()
    // console.log('Whats responseJson: ', responseJson);

    const responseExperience = await fetch(`${process.env.REACT_APP_API_URL}/experience`)
    // console.log('Whats response in componenWillMount: ', response)
    const experiences = await responseExperience.json()

    console.log('experiences is: ', experiences);
    
    
    this.setState({
      // experiences: this.props.history.location.state.result
      experiences: experiences.result
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
        <Jumbotron fluid>
          <Container>
            <h1 className="display-4">Explore</h1>
            <p className="lead">Check out some locations that people have posted about.</p>
            <FormGroup row>
              <Label for="search"></Label>
              <Col>
              <Input onChange={this.onSearchChange} type="search" name="search" id="search" placeholder="Search by city..." />
              </Col>
              <Button className="mr-3">Submit</Button>
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