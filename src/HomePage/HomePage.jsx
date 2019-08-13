import React from 'react';
import { Link } from 'react-router-dom';
import { userActions } from '../_actions/user.actions';
import { connect } from 'react-redux';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getUser();
    }


    render() {
        const { user } = this.props;
        
        return (
            <div className="col-md-6 col-md-offset-3">
                 <p>
                     <h1>{user.firstName} {user.lastName}</h1>
                    <Link to="/login">Logout</Link>
                </p>
            </div>
        );
    }
}


const mapState = state =>({
     user: state.user
})

const actionCreators ={
    getUser: userActions.getUser
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };