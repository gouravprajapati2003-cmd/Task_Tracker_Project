import { createSlice, nanoid } from '@reduxjs/toolkit'
const taskSlice = createSlice({
  name: 'task',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (state, action) => {
      let data = {
        id: nanoid(),
        content: action.payload,
        completed: false
      }
      state.items.push(data)
    },
    completeTask: (state, action) => {
      let item = state.items.find(item => item.id == action.payload)
      if (item) {
        item.completed = true
      }
    },
    toggleTask: (state, action) => {
      let item = state.items.find(item => item.id == action.payload)
      if (item) {
        item.completed = false
      }
    },
    deleteTask: (state, action) => {
        state.items = state.items.filter((item) => item.id !== action.payload)

    }
  }
})

export const { addTask, deleteTask, toggleTask, completeTask } =
  taskSlice.actions
export default taskSlice.reducer
