import React from 'react';
import {
  Button,
  Jumbotron
} from 'reactstrap';

const FeaturedLayout = props => (
  <div>
    <Jumbotron>
      <h1 className="display-3">{props.name}</h1>
    </Jumbotron>
  </div>
)

export default FeaturedLayout;