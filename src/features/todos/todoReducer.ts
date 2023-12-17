import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export interface TodoItem {
  text: string;
  completed?: Boolean;
  id: string;
}
export type ToDoState = TodoItem[];
const initialState: ToDoState = [
  {
    id: "00",
    text: "Eat food",
    completed: true,
  },
];
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      state.push({
        text: action.payload.text,
        id: action.payload.id,
        completed: false,
      });
      // return [
      //   ...state,
      //   { text: action.payload.text, id: action.payload.id, completed: false },
      // ];
    },
    delTodo: (state, action: PayloadAction<string[]>) => {
      return state.filter((item) => {
        return !action.payload.includes(item.id);
      });
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      state.forEach((item) => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
      });
    },
  },
});
export const { addTodo, delTodo, toggleTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo;
export default todoSlice.reducer;
