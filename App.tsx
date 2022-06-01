import { StyleSheet } from 'react-native';
import NativeMaps from './src/components/map/NativeMapsComponent';

export default function App() {
  return (
    <NativeMaps></NativeMaps>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
