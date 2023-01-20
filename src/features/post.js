import { createSlice } from "@reduxjs/toolkit";


const postSLice = createSlice((
  name: 'Post',
  initialState: [
    posts: [],
    showModal: false
  ];
reducers: {
  postadd: (state, action) => {
    state.posts.push(action.payload);
  },
    toggle: (state.action)=>
}
));

export cons { postadd }= postSlice.



