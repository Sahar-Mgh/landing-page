// src/store.js
import { createStore } from 'redux';

// reducer
const initialState = {
  example: 'Redux State Example',
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
