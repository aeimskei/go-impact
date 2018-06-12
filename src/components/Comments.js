import React, { Component } from 'react';
import { 
  Label, 
  Input, 
  Form, 
  FormGroup, 
  ListGroup, 
  ListGroupItem, 
  Button,
  Col } from 'reactstrap';
import decode from 'jwt-decode';

class Comments extends Component {
  
  state = {
    user_id: '',
    experience_id: '',
    comment: '',
    comments: []
  }

  componentDidMount = async () => {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/comments`, {
      method: "GET"
    })
    const allComments = await response.json()

    // console.log('whats allComments: ', allComments);

    let token = localStorage.getItem("user")

    if (token) {
      this.setState({
        loggedIn: decode(token).loggedIn
      })
    } else {
      this.setState({
        loggedIn: false
      })
    }

    this.setState({
      comments: [...this.state.comments, ...allComments.filter(comment => comment.experience_id === this.props.experience)]
    })
  }

  handleCommentSubmit = async (e) => {
  e.preventDefault()

  if (!this.state.comment) {
    alert('Comment field must be filled')
  } else {
    let token = localStorage.getItem("user")

    console.log('user_id', decode(token).sub.id); 
    console.log('this.state.experience_id = ', this.props.experience);
    

    // console.log('state in Comments ===> ', this.state);
    // console.log('result in Comments ===> ', result);

      const response = await fetch(`${process.env.REACT_APP_API_URL}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": token
        },
        body: JSON.stringify({
          user_id: decode(token).sub.id,
          experience_id: this.props.experience,
          comment: this.state.comment
        })
      })
      const newComment = await response.json()
      console.log('newComment = ', newComment);
      
      this.setState({comments: [...this.state.comments, ...newComment], comment: ""})
    }
  }

  render() {
    console.log('whats this.state.comment is: ', this.state.comments)
    return (
      <div className="mt-5">
          {
          this.state.loggedIn ? (
          <h3>Comment</h3>
          ) : (
            null
          )}
          {/* hide form if user is not logged in */}
          { this.state.loggedIn ? (     
          <Form onSubmit={this.handleCommentSubmit}>
            <FormGroup row>
              <Label for="comment"></Label>
              <Col>
              <Input onChange={e => this.setState({ comment: e.target.value })} type="text" name="comment" id="comment" placeholder="Enter here" value={this.state.comment}/>
              </Col>
              <Button className="mr-3">Submit</Button>
            </FormGroup>
          </Form> 
          ) : (
            null
          )}
        <ListGroup>
            {this.state.comments.map(comment => {
              // return <ListGroupItem key={comment.id}>{comment.user.username} {comment.created_at} {comment.comment}</ListGroupItem>
              return <ListGroupItem key={comment.id}><strong>{comment.user.username}</strong><br/>{comment.comment}</ListGroupItem>
            })}
        </ListGroup>
      </div>
    )
  }
}

export default Comments;