import React, { Component } from 'react';
import {
  Container,
  Jumbotron,
  Label,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col
} from 'reactstrap';
import decode from 'jwt-decode';
import ExperienceList from './ExperienceList';
import Header from './Header';

class Profile extends Component {

  state = {
    experiences: []
  }

  componentWillMount = async () => {
    const responseExperience = await fetch(`${process.env.REACT_APP_API_URL}/experience`)
    const experiences = await responseExperience.json()
    let token = localStorage.getItem("user")
    if (token) {
      console.log('whos the user', token)
  
      let userId = decode(token).sub.id
      // v1
      // this.setState({
      //   experiences: experiences.result.filter(experience => {
      //     return experience.user_id === userId
      //   })
      // })
      // v2
      this.setState({
        experiences: experiences.result.filter(experience => 
          experience.user_id === userId
        )
      })
      console.log('whats setState for experiences', this.state.experiences)
    }

  }

  render() {

    return (
      <div>
        <Header />
        <Jumbotron fluid>
          <Container>
          <h1 className="display-4">Hello, User Name</h1>
          <p className="lead">Feel free to make changes to your post here.</p>
          </Container>
        </Jumbotron>

        <ExperienceList onlyUser={true} experiences={this.state.experiences} />
      </div>
    )
  }

}

export default Profile;