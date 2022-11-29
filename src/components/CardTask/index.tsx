import { View, Text, Switch, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { deleteTask, TypeTask } from '../../features/slice';
import { finishTask } from '../../features/slice';
import { useDispatch } from 'react-redux';

export default function Card({ id, nameTask, done }: TypeTask) {
  const dispatch = useDispatch();

  const handleTask = ({ id, nameTask, done }: TypeTask) => {
    dispatch(finishTask({ id, nameTask, done }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textTask}>
          <TouchableOpacity
            onPress={() => handleTask({ id, nameTask, done })}
            style={styles.confirm}
          >
            {/* <Text></Text> */}
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
              handleTask({ id, nameTask, done });
            }}
          >
            {!done ? (
              <Text style={styles.task}>{nameTask}</Text>
            ) : (
              <Text style={styles.taskDone}>{nameTask}</Text>
            )}
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => dispatch(deleteTask({ id, nameTask, done }))}
        >
          <FontAwesome
            name='trash-o'
            size={24}
            color='#808080'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
