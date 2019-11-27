import React from 'react';
import {connect} from 'react-redux';
import {fetchposts} from '../actions';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchposts();
    }
    render(){
        return(
            <div>Post List</div>
        )
    }
}
export default connect(null,{fetchposts}) (PostList);