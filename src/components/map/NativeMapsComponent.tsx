import { useState } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

const NativeMaps = () => {
  const [region, setRegion] = useState<undefined | null>(null);

  return (
    <View>
      <MapView
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};


export default NativeMaps;
