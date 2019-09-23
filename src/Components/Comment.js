import React, {Component} from "react";

class Comment extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        event.preventDefault();
        const comment=event.target.elements.comment.value;
        this.props.startAddingComment(comment, this.props.id);
        event.target.elements.comment.value="";
    }

    render() {
        //console.log(this.props.comments);
        return(<div className="comment">
            {
                this.props.comments.map((comment, index)=>{
                    return(<p key={index}>{comment}</p>)
                })
            }
            <form className="comment-form" onSubmit={this.handleSubmit}> 
                <input type="text" name="comment" placeholder="Comment"/>
                <input type="submit"/>
            </form>
        </div>);
    }
}

export default Comment;