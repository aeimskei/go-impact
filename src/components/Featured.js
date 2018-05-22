import React, { Component } from 'react';
import { 
  Jumbotron,
  Row, 
  Button} from 'reactstrap';

class Featured extends Component {

  state = {
    experiences: [{
      name: '',
      imageUrl: '',
      description: '',
      url: '',
    }]
  }

  componentWillMount = async () => {
    // const response = await fetch(`${process.env.REACT_APP_API_URL}/experience`) 
    // console.log('Whats response in componenWillMount in Featured: ', response)
    // const responseJson = await response.json()
    // console.log('Whats responseJson: ', responseJson);
    // this.setState({experiences: responseJson.result})
  }
  

  render() {  

    console.log('this.props in Feature: ', this.props);
    
    const {name, imageUrl, description} = this.props.history.location.state

    return (
      <div>
        <Jumbotron>
        <h1>{name}</h1>
        </Jumbotron>
      </div>
    )
  }
}

export default Featured;