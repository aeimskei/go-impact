import React from 'react';
import { Jumbotron } from 'reactstrap';

const Featured = () => {

  let name;
  let description;

  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">{name}</h1>
        <p className="lead">{description}</p>
      </Jumbotron>
    </div>
  )
}

export default Featured;