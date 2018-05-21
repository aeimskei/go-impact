import React, { Component } from 'react';
import { 
  Button,
  Form,
  FormGroup,
  Label,
  Input
 } from 'reactstrap';

class Login extends Component {

  state = {
    email: '',
    password: ''
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    console.log(this.state.email, this.state.password)
    if (!this.state.email || !this.state.password) {
      alert('All field must be filled')
    } else {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
      })
      // const user = await response.json()
      // console.log('user id what: ', user);
      // console.log('user id what: ', user.headers.authorization);
      console.log('user id what: ', response.headers.get("Authorization"));
    }
  }

  // localStorage here

  render() {
    return (
      <div>
        <div className="container">
          <Form onSubmit={this.handleSubmit}>  
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

export default Login;