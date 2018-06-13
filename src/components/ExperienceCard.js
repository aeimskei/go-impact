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
    subtext: '',
    description: '',
    url: ''
  }

  // componentWillMount = () => {
  //   console.log('Whats being logged out for this.props in expCard', this.props);
    
  // }

  handleLearnMore = async (e) => {
    const {id} = this.props.experience
    let experienceId = await fetch(`${process.env.REACT_APP_API_URL}/experience/${id}`)
    let responseJson = await experienceId.json()
    let {result} = responseJson
    let [experience] = result
    console.log('handleLearnMore: ', responseJson)
    console.log('what is experience in card: ', experience);

    this.props.history.push(`/experiences/${id}`, experience)
  }

  render() {

    const {id, imageUrl, name, subtext, description, url} = this.props.experience
    return (
    <Col lg="4" className="mb-3">
      <Card body>
        <img width="360" height="215" class="card-img-top" src={imageUrl} alt="Image of Location" />
        <CardTitle className="mt-3">{name}</CardTitle>
        <CardText>{subtext}</CardText>
        <Button className="mb-1" onClick={this.handleLearnMore}>Learn more</Button>
        {/* this.props.onlyUser
        true: show delete button
        false: show null
        */}
        {
          this.props.onlyUser ? (
            <Button color="danger" onClick={() => this.props.handleDelete(id)}>Delete</Button>
          ) : (
            null
          )
        }
        
      </Card>
    </Col>
    )
  }


}


export default ExperienceCard;