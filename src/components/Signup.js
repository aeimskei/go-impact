import React, { Component } from 'react';
import { 
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Jumbotron,
  Container
 } from 'reactstrap';
 import Header from './Header';

class Signup extends Component {

  state = {
    username: '',
    email: '',
    password: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(this.state.username, this.state.email, this.state.password)
    if (!this.state.username || !this.state.email || !this.state.password) {
      alert('All field must be filled')
    } else {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          email: this.state.email,
          password: this.state.password
        })
      })
      const newUser = await response.json()
      console.log('newUser id what: ', newUser);
    }
  }

  render() {
    return (
      <div>
      <Header/>
        <Jumbotron fluid>
          <Container>
          <h1 className="display-4">Signup</h1>
          <p className="lead">To contribute, post new locations and comment. </p>
          </Container>
        </Jumbotron>
        <div className="container">
          <Form onSubmit={this.handleSubmit}>  
            <FormGroup>
              <Label for="username">Username</Label>
              <Input onChange={e => this.setState({username: e.target.value})} type="username" name="username" id="username" placeholder="username" />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input onChange={e => this.setState({email: e.target.value})}type="email" name="email" id="email" placeholder="email" />
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input onChange={e => this.setState({password: e.target.value})}type="password" name="password" id="password" placeholder="password" />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default Signup;