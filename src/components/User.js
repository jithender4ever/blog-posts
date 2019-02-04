import React from 'react';
import {getPostsAndUsers} from "../actions";
import {connect} from "react-redux";

class User extends React.Component{

    componentDidMount(){
        this.props.getPostsAndUsers();
    }

    render() {
        const { user } = this.props;

        return (
            <div>
                {user && <div>{user.name}</div>}
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {

  return {
      user: state.users.find(user => user.id === ownProps.userId)
  }
};

export default connect(mapStateToProps, {getPostsAndUsers})(User);
