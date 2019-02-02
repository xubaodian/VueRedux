import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { REQUEST_POSTS, FAILURE_POSTS, RECEIVE_POSTS } from './action';


function posts(
  state = {
    isFetching: false,
    items: [],
    ids: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case FAILURE_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      let list = [...state.items];
      let ids = [...state.ids];
      let index = state.ids.indexOf(action.posts.id);
      let data;
      if (index > -1) {
        data = Object.assign({}, list[index], {
          count: list[index].count++
        });
      } else {
        data = Object.assign({}, action.posts, {
          count: 1
        });
        list = list.concat([data]);
        ids = ids.concat(action.posts.id);
      }
      return Object.assign({}, state, {
        isFetching: false,
        items: list,
        ids: ids,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}


function postsData(state, action) {
  switch (action.type) {
    case RECEIVE_POSTS:
    case FAILURE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        ...posts(state, action)
      });
    default:
      return state;
  }
}

export const cart = createStore(postsData, applyMiddleware(
  thunkMiddleware
));
