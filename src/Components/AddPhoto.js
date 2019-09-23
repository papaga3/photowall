import React, {Component} from "react";
//import {Link} from "react-router-dom";
class AddPhoto extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const imageLink=event.target.elements.link.value;
        const desc=event.target.elements.desc.value;
        const post = {
            id: Number(new Date()),
            description: desc,
            imageLink: imageLink
        };
        if(desc && imageLink) {
            this.props.startAddingPost(post);
            this.props.onHistory.push("/");
        }
    }

    render() {
        console.log(this.props);
        return(
            <div>
                <div className="addImgForm">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="desc"/>
                        <button>Add picture</button>
                    </form>
                </div>
            </div>
            );
    }
}

export default AddPhoto;