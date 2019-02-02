import { resolve } from "url";
import { rejects } from "assert";

//发送请求
export const REQUEST_POSTS = 'REQUEST_POSTS';

//接收请求
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

//请求失败
export const FAILURE_POSTS = 'FAILURE_POSTS';


function requestPosts(subreddit) {
    return {
      type: REQUEST_POSTS
    };
}

function failurePosts(subreddit) {
    return {
      type: FAILURE_POSTS
    };
}

function receivePosts(json) {
    return {
      type: RECEIVE_POSTS,
      posts: json,
      receivedAt: Date.now()
    };
}


export function fetchPosts(data) {
  
    return function(dispatch) {
  
      dispatch(requestPosts());
  
      return new Promise((resolve, reject) => {
          setTimeout(() => {
              resolve({
                  json: data
              });
          }, 1500);
      }).then(
          response => response.json,
          _ => { dispatch(failurePosts()); }
        )
        .then(json =>
          dispatch(receivePosts(json))
        );
    };
  }