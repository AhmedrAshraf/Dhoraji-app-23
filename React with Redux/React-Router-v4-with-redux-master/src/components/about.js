import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class About extends Component {
    render() {
        return (
            <div>
                <h1>Hello About {this.props.currentUserName}</h1>
                <Link to='/'>Go to Home</Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return ({
        currentUserName: state.basicInfo.username
    })
}


export default connect(mapStateToProps, null)(About);
