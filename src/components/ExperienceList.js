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
import decode from 'jwt-decode';

class ExperienceList extends Component {

  state = {
    experiences: []
  }


  componentWillReceiveProps = (props) => {
    console.log('componentWillReceiveProps in ExpList');
console.log('props is = ', props);

    this.setState({
      // experiences: this.props.history.location.state.result
      experiences: props.experiences
    })
  }

  handleDelete = async (id) => {
    let token = localStorage.getItem("user")
    console.log('whats id ===> ', id);
    
    const response = await fetch(`${process.env.REACT_APP_API_URL}/experience/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": token 
      }
    })
    console.log(response);

    if (response.status === 200) {
      this.setState({
        experiences: this.state.experiences.filter(experience => 
          experience.id !== id
        )
      })
    }
  }

  render() {
    console.log('render in ExpList');
console.log('this.props.experiences', this.props.experiences);

    return (
      <div>
        <Container>
          <Row>
            {this.state.experiences.map(experience => {
              // return <ExperienceCard imageUrl={experience.imageUrl} name={experience.name} description={experience.description} experienceId={experience.id}/>
              return <ExperienceCard onlyUser={this.props.onlyUser} history={this.props.history} key={experience.id} experience={experience} handleDelete={this.handleDelete} />
            })}
          </Row>
        </Container>
      </div>
    )
  }
}

export default ExperienceList;