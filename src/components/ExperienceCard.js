import React, { Component } from 'react';
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardLink,
  CardTitle,
  Col,
} from 'reactstrap';

class ExperienceCard extends Component {

  state = {
    name: '',
    imageUrl: '',
    description: '',
    url: ''
  }

  componentWillMount = () => {
    console.log('Whats being logged out for this.props in expCard', this.props);
    
  }

  handleLearnMore = async (e) => {
    const {id} = this.props.experience
    let experienceId = await fetch(`${process.env.REACT_APP_API_URL}/experience/${id}`)
    let responseJson = await experienceId.json()
    let {result} = responseJson
    let [experience] = result
    console.log('handleLearnMore: ', responseJson)
    console.log(experience);

    this.props.history.push(`/experiences/${id}`, experience)
  }

  render() {

    const {imageUrl, name, description, url} = this.props.experience
    return (
    <Col sm="4" className="mb-3">
      <Card body>
        <img width="100%" src={imageUrl} alt="Image of Location" />
        <CardTitle>{name}</CardTitle>
        <CardText>{description}</CardText>
        <Button onClick={this.handleLearnMore}>Learn more</Button>
      </Card>
    </Col>
    )
  }


}


export default ExperienceCard;