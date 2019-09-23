import Main from './Main';
import {connect} from "react-redux";
import * as actions from "../redux/Actions";
import { bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";

function mapStateToProps(state) {
    return {
        posts: state.postReducer,
        comments: state.commentReducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
//export default connect(mapStateToProps, mapDispatchToProps)(Main);
