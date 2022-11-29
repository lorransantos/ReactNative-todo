import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  task: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TypeTask>) => {
      state.task.push(action.payload);
    },

    finishTask: (state, action: PayloadAction<TypeTask>) => {
      state.task.map((item) => {
        if (item.id === action.payload.id) {
          item.done = !item.done;
        }
      });
      console.log(action.payload);
    },

    tasksDone: (state, action: PayloadAction<TypeTask>) => {
      state.task.map((item) => {
        if (item.done === true) {
          const taskDone = item;
          console.log(taskDone);
        }
      });
    },

    deleteTask: (state, action: PayloadAction<TypeTask>) => {
      state.task.map((item, index) => {
        if (item.id === action.payload.id) {
          state.task.splice(index, 1);
          return state.task;
        }
      });
    },
  },
});

export default taskSlice.reducer;

export const { addTask, finishTask, tasksDone, deleteTask } = taskSlice.actions;

export type TypeTask = {
  id: number;
  nameTask: string;
  done: boolean;
};

export type InitialState = {
  task: TypeTask[];
};
