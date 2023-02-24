import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Page.css'
import { Card, Row, Col} from "react-bootstrap";

export default class PostList extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`https://www.jalirani.com/files/barstool.json`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
      })
  }

  render() {
    return (
          this.state.posts
            .map(post =>
              <Post key={post.id} json = {post}/>
            )
      
    )
  }
}

  
  
function Thumbnail(props) {
    return <img width={100} height={100} className = "thumbnail" src = {props.url} alt = "srry bruh"/>
};
  
  
  function Post(props) {
    var j = props.json;
    var title = j.title;
    var count = j.comment_count;
    var author = j.author.name;
    var authorImg = j.author.avatar
    var thumbnail = j.thumbnail.location + j.thumbnail.images.small
    var link = j.url
  
    return(
        <Card width={100} height={100}>
            <Row>
                <Col>
                    <Thumbnail url = {thumbnail}/>
                </Col>

                <Col>
                    <Row><a href = {link}><p>{title}</p> </a></Row>
                    <Row><p> by {author}</p></Row>
                    <img width={25} height={25} src = {authorImg} alt = "srry again bruh" />
                    <Row><p>{count} comments</p></Row>
                </Col>
            </Row>
          </Card>
    )};