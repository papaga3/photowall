import {database} from "../database/config";
import { async } from "q";
export function startAddingPost(post){
    return async (dispatch)=>{
        try {
            await database.ref('posts').update({ [post.id]: post });
            dispatch(addPost(post));
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function startLoadingPost() {
    return(async (dispatch)=>{
        try {
            const snapshot = await database.ref('posts').once('value');
            let posts = [];
            snapshot.forEach((childSnapShot) => {
                posts.push(childSnapShot.val());
            });
            dispatch(loadPost(posts));
        }
        catch (error) {
            console.log(error);
        }
    });
}

export function startRemovingPost(index, id) {
    return(async (dispatch)=>{
        try {
            await database.ref(`posts/${id}`).remove();
            dispatch(removePost(index));
        }
        catch (error) {
            console.log(error);
        }
    })
}

export function startAddingComment(comment, postId) {
    return(async (dispatch)=>{
        try {
            await database.ref(`comments/${postId}`).push(comment);
            dispatch(addComment(comment, postId));
        }
        catch (error) {
            console.log(error);
        }
    });
}

export function startLoadingComment() {
    return(async (dispatch)=>{
        try {
            const snapshot = await database.ref('comments').once('value');
            //console.log(snapshot);
            let comments = {};
            snapshot.forEach((childSnapShot) => {
                console.log(childSnapShot.key);
                console.log(Object.values(childSnapShot.val()));
                comments[childSnapShot.key] = Object.values(childSnapShot.val());
            });
            
            dispatch(loadComments(comments));
        }
        catch (error) {
            console.log(error);
        }
    });
}

// remove post
export function removePost(index) {
    return {
        type: "REMOVE_POSTS",
        index: index
    }
}

// add new post
export function addPost(post) {
    return {
        type: "ADD_POST",
        post: post
    }
}

export function addComment(comment, postId) {
    //console.log(comment, postId);
    return {
        type: "ADD_COMMENT",
        comment: comment,
        postId: postId
    }
}

export function loadPost(posts) {
    return{
        type: "LOAD_POSTS",
        posts
    }
}

export function loadComments(comments) {
    return {
        type: "LOAD_COMMENTS",
        comments
    }
}