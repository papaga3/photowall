import React, {Component} from "react";
import Photo from "./Photo";
import Comment from "./Comment";
class Single extends Component {
    render() {
        const id = Number(this.props.match.params.id);
        const post = this.props.posts.find(post=>post.id===id);
        const comments = this.props.comments[id] || []; // get comments belong to this id
        const index = this.props.posts.findIndex((post)=>post.id===id);
        return(<div className="single-photo">
            <Photo className="photo" {...this.props} post={post} index={index}/> 
            <Comment className="comments" startAddingComment={this.props.startAddingComment} comments={comments}
                                        id={id}/>
        </div>);
    }
}

export default Single;