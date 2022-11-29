import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    minHeight: 60,
    backgroundColor: '#262626',
    borderRadius: 4,
    marginTop: 8,
    padding: 16,
    flexWrap: 'wrap',
  },
  confirm: {
    width: 30,
    justifyContent: 'center',
  },
  textTask: {
    flexDirection: 'row',
    flex: 2,
    marginRight: 40,
  },
  task: {
    marginLeft: 8,
    fontSize: 16,
    color: '#ffffff',
  },
  taskDone: {
    marginLeft: 8,
    fontSize: 16,
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  trash: {
    flex: 1,
  },
});
