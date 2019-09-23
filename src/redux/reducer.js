import posts from "../data/posts";
import {combineReducers} from "redux";
function commentReducer(state=[], action) {
    // console.log("comment reducer");
    switch(action.type) {
        case "ADD_COMMENT":
            // state[action.postId] : access object property by bracket notation
            // [variable]:value => computed property name => the variable will become name of the new property
            if(!state[action.postId]){
                return {...state, [action.postId]:[action.comment]};
            } else {
                return {...state, [action.postId]:[...state[action.postId], action.comment]};
            }
        case "LOAD_COMMENTS" :
            return action.comments;
        default:
            return state;
    }
}

function postReducer(state=posts, action) {
    // remove photo action
    // console.log(action.index);
    // console.log("post reducer");
    switch(action.type) {
        case "REMOVE_POSTS": 
            return [...state.slice(0, action.index), ...state.slice(action.index+1)];
        case "ADD_POST" :
            return [...state, action.post];
        case "LOAD_POSTS" : 
            return action.posts;
        default: 
            return state;
    }
}

const rootReducer = combineReducers({postReducer, commentReducer});

export default rootReducer;