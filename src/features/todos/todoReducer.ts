import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
export interface TodoItem {
  text: string;
  completed?: Boolean;
  id: number;
}
export type ToDoState = TodoItem[];
const initialState: ToDoState = [
  {
    id: 0,
    text: "Eat food",
    completed: true,
  },
];
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TodoItem>) => {
      return [
        ...state,
        { text: action.payload.text, id: action.payload.id, completed: false },
      ];
    },
    delTodo: (state, action: PayloadAction<number>) => {
      return state.filter((item) => {
        return (action.payload! = item.id);
      });
    },
    toggleTodo: (state, action: PayloadAction<number>) => {
      return state.map((item) =>
        item.id === action.payload ? { ...item, completed: true } : item
      );
    },
  },
});
export const { addTodo, delTodo, toggleTodo } = todoSlice.actions;
export const selectTodo = (state: RootState) => state.todo;
export default todoSlice.reducer;
