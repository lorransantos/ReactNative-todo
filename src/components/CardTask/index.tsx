import { View, Text, Switch, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { TypeTask } from '../../features/slice';
import { finishTask } from '../../features/slice';
import { useDispatch } from 'react-redux';

export default function Card({ nameTask, done }: TypeTask) {
  const dispatch = useDispatch();

  const handleTask = ({ nameTask, done }: TypeTask) => {
    dispatch(finishTask({ nameTask, done }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <TouchableOpacity
          onPress={() => handleTask({ nameTask, done })}
          style={styles.confirm}
        >
          {done ? (
            <AntDesign
              name='checkcircle'
              size={20}
              color='#5e60ce'
            />
          ) : (
            <AntDesign
              name='checkcircleo'
              size={20}
              color='#4ea8de'
            />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            handleTask({ nameTask, done });
          }}
        >
          {!done ? (
            <Text style={styles.task}>{nameTask}</Text>
          ) : (
            <Text style={styles.taskDone}>{nameTask}</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
