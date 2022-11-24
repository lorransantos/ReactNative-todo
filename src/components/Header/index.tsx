import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export default function Header() {
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
        />
        <TouchableOpacity style={styles.button}>
          <Text style={{fontSize: 24, color: '#ffffff'}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
