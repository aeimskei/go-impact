import React, { Component } from 'react';
import { 
  Button,
  Form,
  FormGroup,
  Label,
  Input
 } from 'reactstrap';

class Post extends Component {

  state = {
      name: '',
      address: '',
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
    if (!this.state.name || !this.state.address || !this.state.description || !this.state.url || !this.state.imageUrl) {
      alert('All field must be filled')
    } else {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/experience`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: this.state.name,
          address: this.state.address,
          description: this.state.description,
          url: this.state.url,
          imageUrl: this.state.imageUrl
        })
      })
    }
  }

  handleFetchLocation = async (e) => {
    let response = await fetch(`${process.env.REACT_APP_GOOGLE_GEOLOCATE_API}?address=${this.state.name}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`)

    console.log('whats response for fetch location: ', await response.json());

    let result = await response.json()

    this.setState({
      address: result[0].formatted_address,
      city: result[0].locality,
      latitude: result[0].geometry.location.lat,
      longitude: result[0].geometry.location.lng
    })

    // https://maps.googleapis.com/maps/api/geocode/json?address=1951+Cafe&key=AIzaSyCQ4M58brpwEqpG12LuZRjPBu45zROgKnk

    // https://maps.googleapis.com/maps/api/geocode/json?address=[TYPED IN FROM SEARCH BAR]&key=AIzaSyCQ4M58brpwEqpG12LuZRjPBu45zROgKnk
  }

  render() {
    return (
      <div>
        <div className="container">
        <h1 className="display-3">Post an Experience</h1>
          <Form onSubmit={this.handleSubmit}>  
            <FormGroup>
              <Label for="name">Location Name</Label>
              <Input 
                onChange={e => this.setState({ name: e.target.value })}
                onChange={this.handleFetchLocation}
                type="name"
                name="name"
                id="name"
                placeholder="location name" 
              />
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