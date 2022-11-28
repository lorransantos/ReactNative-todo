import { Provider } from 'react-redux';
import slice from './src/features/slice';
import store from './src/features/store';
import Home from './src/screens/Home';

export default function App() {
  return (
    <Provider store={store}>
    <Home />
    </Provider>
  );
}
