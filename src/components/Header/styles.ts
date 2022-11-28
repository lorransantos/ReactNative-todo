import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    height: '25%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 30,
  },
  title: {
    fontSize: 55,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  to: {
    color: '#4ea8de',
  },
  do: {
    color: '#5e60ce',
  },
  form: {
    width: '100%',
    justifyContent: 'center',
    marginBottom: -25,
    flexDirection: 'row',
  },
  input: {
    width: '70%',
    height: 50,
    backgroundColor: '#262626',
    borderRadius: 4,
    padding: 16,
    color: '#ffffff',
    marginRight: 8,
  },
  button: {
    backgroundColor: '#1e6f9f',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  addButton: {
    color: '#ffffff',
    fontSize: 24,
  }
});
