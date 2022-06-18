import { StyleSheet, StatusBar } from 'react-native';
import NativeMaps from './src/components/map/NativeMapsComponent';

export default function App() {
  return (
    <>
      <StatusBar/>
      <NativeMaps></NativeMaps>
    </>
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
