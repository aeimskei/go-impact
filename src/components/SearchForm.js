import React, { Component } from 'react';
import { 
  Jumbotron, 
  Label, 
  Form,
  FormGroup, 
  Input,
  Row,
  Col,
  Button
} from 'reactstrap';

class SearchForm extends Component {

  state = {
    searchCity: ''
  }

  onSearchChange = e => {
    this.setState({ searchCity: e.target.value });
    console.log('whats this.state.searchCity: ', this.state.searchCity);
    
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.props.onSearch(this.value)
    // e.currentTarget.reset()
  }

  render() {  
    return (
      <Jumbotron>
        <h1 className="display-3">Experiences</h1>
        <FormGroup row>
          <Label for="search"></Label>
          <Col sm={10}>
          <Input onChange={this.onSearchChange} className="mr-2"type="search" name="search" id="search" placeholder="Search your next social impact experience..." />
          </Col>
          <Button>Submit</Button>
        </FormGroup>
      </Jumbotron>
    )
  }
}

export default SearchForm;