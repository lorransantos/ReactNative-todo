import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: InitialState = {
  task: [],
};

const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<TypeTask>) => {
      // [...state.task, action.payload];
      state.task.push(action.payload);
    },

    finishTask: (state, action: PayloadAction<TypeTask>) => {
      state.task.map((item) => {
        if (item.nameTask === action.payload.nameTask) {
          item.done = !item.done;
        }
      });
      // console.log(state.task);
    },

    tasksDone: (state, action: PayloadAction<TypeTask>) => {
      state.task.map((item) => {
        if (item.done === true) {
          const taskDone = item;
          console.log(taskDone);
        }
      });
    },
  },
});

export default taskSlice.reducer;

export const { addTask, finishTask, tasksDone } = taskSlice.actions;

export type TypeTask = {
  nameTask: string;
  done: boolean;
};

export type InitialState = {
  task: TypeTask[];
};
