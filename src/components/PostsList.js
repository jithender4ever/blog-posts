import React from 'react';
import {getPostsAndUsers} from "../actions";
import {connect} from "react-redux";
import User from "./User";

class PostsList extends React.Component {

    componentDidMount() {
        this.props.getPostsAndUsers();
    }

    renderPosts = () => {
      return this.props.posts.map(post => (
          <div className={'ui divided list'} key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <User userId={post.userId}/>
          </div>
      ))
    };

    render() {
        return (
            <div className={'ui divided list'}>
                {this.renderPosts()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      posts: state.posts
  }
};

export default connect(mapStateToProps, {getPostsAndUsers})(PostsList);
