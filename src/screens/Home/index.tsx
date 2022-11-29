import React from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import Card from '../../components/CardTask';
import Header from '../../components/Header';
import { useSelector } from 'react-redux';
import { RootState } from '../../features/store';
import { FontAwesome5 } from '@expo/vector-icons';

import { styles } from './styles';
import StatusTasks from '../../components/StatusTasks';

export default function Home() {
  const { task } = useSelector((state: RootState) => state.task);

  return (
    <View style={styles.container}>
      <Header />

      <StatusTasks />

      <FlatList
        data={task}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            nameTask={item.nameTask}
            done={item.done}
          />
        )}
        ListEmptyComponent={() => (
          <View style={styles.listEmptyContainer}>
            <FontAwesome5
              name='clipboard-list'
              size={40}
              color='#808080'
            />
            <Text style={styles.listEmptyTitle}>
              Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.listEmptyDescription}>
              Crie tarefas e organize seus itens a fazer
            </Text>
          </View>
        )}
      />

      {/* <ScrollView style={styles.containerTasks}>
        {task.map((item, index) => {
          return (
            <Card
              key={index}
              nameTask={item.nameTask}
              done={item.done}
            />
          );
        })}
      </ScrollView> */}
      {/* <Card nameTask='teste' /> */}
    </View>
  );
}
