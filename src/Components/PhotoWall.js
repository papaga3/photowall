import React, {Component} from "react";
import {Link} from "react-router-dom";
import Photo from "./Photo";
import PropTypes from "prop-types";
class PhotoWall extends Component {
    render() {
        return (
            <div>
                <Link className="addButton" to="/AddPhoto">+</Link>
                <div className="photoGrid"> 
                    {this.props.posts.sort(function(x,y){
                        return y.id - x.id;
                    }).map((post, index)=><Photo post={post} key={index} {...this.props} index={index}/>)}
                </div>
            </div>
        );
    }
}   

PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired
}

export default PhotoWall;