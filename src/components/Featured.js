import React, { Component } from 'react';
import { 
  Container,
  Jumbotron,
  Row, 
  Col,
  Button} from 'reactstrap';
import Comments from './Comments';
import LocationMap from './LocationMap';


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
    
    const {id, name, imageUrl, description, url, address, latitude, longitude} = this.props.history.location.state

    return (
      <div>
        <Jumbotron fluid>
          <Container>
          <h1 className="display-4">Their Social Impact Story</h1>
          <p className="lead">Empowering and inspiring.</p>
          </Container>
        </Jumbotron>
        <Container style={{ padding: "30px"}}>
          <Row>
            <Col lg={5}>
              <img width="100%" style={{ marginBottom: "20px"}} src={imageUrl} alt="Image of Location" />
            </Col>
            <br />
            <Col>
              <h1>{name}</h1>
              <p>{address}</p>
              <p>{description}</p>
              <a href={url}>Website</a>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
            <div style={{width:"400px", height:"250px"}}>
              <LocationMap fluid name={name} latitude={latitude} longitude={longitude}/>
            </div>
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