import React from 'react';
import {
  Button,
  Card,
  CardImg,
  CardText,
  CardLink,
  CardTitle,
  Col,
} from 'reactstrap';

const ExperienceCard = props => (
  <Col sm="4">
    <Card body>
      <img width="100%" src={props.imageUrl} alt="Image of Location" />
      <CardTitle>{props.name}</CardTitle>
      <CardText>{props.description}</CardText>
      <Button>Learn more</Button>
    </Card>
  </Col>
)

export default ExperienceCard;