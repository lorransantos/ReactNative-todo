import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../features/slice';
import { RootState } from '../../features/store';

import { styles } from './styles';

export default function Header() {
  const [value, setValue] = React.useState<string>('');
  const dispatch = useDispatch();
  const { task } = useSelector((state: RootState) => state.task);

  const handleAddTask = () => {
    dispatch(addTask({ id: Date.now(), nameTask: value, done: false }));
    setValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        <Text style={styles.to}>to</Text>
        <Text style={styles.do}>do</Text>
      </Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Adicione uma nova tarefa'
          placeholderTextColor='#808080'
          onChangeText={setValue}
          value={value}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddTask()}
        >
          <Text style={styles.addButton}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
