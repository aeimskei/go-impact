import React, { Component } from 'react';
import { 
  Container,
  Jumbotron,
  Row, 
  Col,
  Button} from 'reactstrap';
import Comments from './Comments';


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
    
    const {id, name, imageUrl, description, url, city} = this.props.history.location.state

    return (
      <div>
        <Jumbotron>
          <Container>
          <h1 className="display-3">More about this experience</h1>
          </Container>
        </Jumbotron>
        <Container>
          <Row>
            <Col>
              <img src="http://www.spur.org/sites/default/files/wysiwyg/20-san%20francisco%20zoom%2012%202009_0.jpg" width="100%" />
              <p>{city}</p>
            </Col>
            <Col>
              <img width="100%" src={imageUrl} alt="Image of Location" />
              <h1>{name}</h1>
              <p>{description}</p>
              <a href={url}>Website</a>
            </Col>
          </Row>
          <Row>
            <Col>
              {/* the props is experience, the value is id */}
              <Comments experience={id}/>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Featured;