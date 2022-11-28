import React from 'react';
import { Text, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { tasksDone } from '../../features/slice';
import { RootState } from '../../features/store';

import { styles } from './styles';

export default function StatusTasks() {
  const dispatch = useDispatch();
  const { task } = useSelector((state: RootState) => state.task);

  const taskDone = task.filter((item) => {
    if (item.done === true) {
      return item;
    }
  });

  const tasks = task.filter((item) => {
    if (item.done === false) {
      return item;
    }
  });

  // console.log(task);
  return (
    <View style={styles.container}>
      <Text style={styles.tasks}>Tarefas {tasks.length}</Text>
      <Text style={styles.tasksDone}>Concluídas {taskDone.length}</Text>
    </View>
  );
}
