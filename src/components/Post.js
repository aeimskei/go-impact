import React, { Component } from 'react';
import { 
  Button,
  Form,
  FormGroup,
  Label,
  Jumbotron,
  Container,
  Input
 } from 'reactstrap';
import decode from 'jwt-decode';

class Post extends Component {

  state = {
    user_id: '',
    name: '',
    address: '',
    subtext: '',
    description: '',
    url: '',
    imageUrl: '',
    city: '',
    latitude: '',
    longitude: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(this.state.username, this.state.email, this.state.password)
    if (!this.state.name || !this.state.description || !this.state.url || !this.state.imageUrl) {
      alert('All field must be filled')
    } else {
      let googleResponse = await fetch(`${process.env.REACT_APP_GOOGLE_GEOLOCATE_API}?address=${this.state.name}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)

      // console.log('whats response for fetch location: ', await googleResponse.json());

      let result = await googleResponse.json()
      let token = localStorage.getItem("user")

      this.setState({
        user_id: decode(token).sub.id,
        address: result.results[0].formatted_address,
        city: result.results[0].address_components.filter(component => component.types[0] === 'locality')[0].long_name,
        latitude: result.results[0].geometry.location.lat,
        longitude: result.results[0].geometry.location.lng
      })

      console.log('these are the states of each state ', this.state);
      console.log('result ', result);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/experience`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(this.state)
      })
    this.props.history.push("/experiences")
    }
  }

  // handleFetchLocation = async (e) => {
  //   let response = await fetch(`${process.env.REACT_APP_GOOGLE_GEOLOCATE_API}?address=${this.state.name}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)

  //   console.log('whats response for fetch location: ', await response.json());

  //   let result = await response.json()

  //   this.setState({
  //     address: result[0].formatted_address,
  //     city: result[0].locality,
  //     latitude: result[0].geometry.location.lat,
  //     longitude: result[0].geometry.location.lng
  //   })

  //   // https://maps.googleapis.com/maps/api/geocode/json?address=1951+Cafe&key=AIzaSyCQ4M58brpwEqpG12LuZRjPBu45zROgKnk

  //   // https://maps.googleapis.com/maps/api/geocode/json?address=[TYPED IN FROM SEARCH BAR]&key=AIzaSyCQ4M58brpwEqpG12LuZRjPBu45zROgKnk
  // }

  render() {
    return (
      <div>
        <Jumbotron>
          <Container>
          <h1 className="display-3">Post a location</h1>
          <p className="lead">Share an experience that has not been listed, so folks can help support more awesome socially concious experiences</p>
          </Container>
        </Jumbotron>
        <div className="container">
          <Form onSubmit={this.handleSubmit}>  
            <FormGroup>
              <Label for="name">Location Name</Label>
              <Input 
                onChange={e => this.setState({ name: e.target.value })}
                // onBlur={this.handleFetchLocation}
                type="name"
                name="name"
                id="name"
                placeholder="location name" 
              />
            </FormGroup>
            <FormGroup>
              <Label for="subtext">Subtext</Label>
              <Input onChange={e => this.setState({description: e.target.value})}type="subtext" name="subtext" id="subtext" placeholder="short description for experience card" />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input onChange={e => this.setState({description: e.target.value})}type="description" name="description" id="description" placeholder="description about this experience" />
            </FormGroup>
            <FormGroup>
              <Label for="url">Website</Label>
              <Input onChange={e => this.setState({url: e.target.value})}type="url" name="url" id="url" placeholder="website url" />
            </FormGroup>
            <FormGroup>
              <Label for="imageUrl">Image</Label>
              <Input onChange={e => this.setState({imageUrl: e.target.value})}type="imageUrl" name="imageUrl" id="imageUrl" placeholder="image url" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Post;