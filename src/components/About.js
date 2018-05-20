import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';

class About extends Component {

  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className="display-3">About</h1>
          <p className="lead"> Lorem ipsum dolor sit amet, consectetur adipiscing elit.In egestas tellus justo, et tristique lacus volutpat sed.Maecenas gravida sapien non lectus sodales, at tristique purus malesuada.Vivamus finibus metus sed elit efficitur, non ultrices est fringilla.Pellentesque congue vel libero in aliquet.Donec hendrerit erat non nibh rhoncus bibendum.Phasellus lectus sapien, bibendum non purus et, porta dignissim erat.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Jumbotron>
      </div>
    )
  }
}

export default About;