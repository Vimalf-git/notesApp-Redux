import { createSlice } from '@reduxjs/toolkit'
import deleteIcon from './image/delete.svg'
import editIcon from './image/edit.svg'

export const NotesData = createSlice({
  name: 'notesData',
  initialState: [
   {
      id:1,
      title: 'Feed12backs',
      body: "Lorem ipsum dolor sit amet consectetur",
      editIcon: editIcon,
      deleteIcon: deleteIcon,
      date: "5 days ago"
    },
    {
      id:2,
      title: 'Feedbacks',
      body: "Lorem ipsum dolor sit amet consectetur",
      editIcon: editIcon,
      deleteIcon: deleteIcon,
      date: "5 days ago"
    }
  ],
  reducers: {
    add: (state, action) => {
      console.log(action.payload);
      if(action.payload.id==0){
        // const prevId=state[state.length-1].id+1;
        // action.payload.id=prevId;
        state.push(action.payload);
      }else{
        const prevId=state[state.length-1].id+1;
        action.payload.id=prevId;
        state.push(action.payload);
      }
     
    },
    edit: (state, action) => {
      console.log('enter into edit');
      console.log(state[action.payload.editIndex].id);
      action.payload.data.id=state[action.payload.editIndex].id;
      // console.log(action.payload);
      state.splice(action.payload.editIndex, 1,action.payload.data)
    },
    remove: (state, action) => {
      console.log(action.payload);
      state.splice(action.payload,1);
    }
  }
})
export const { add, edit, remove } = NotesData.actions;
export default NotesData.reducer;