import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const NativeMaps = () => {
  const [marker, setMarker] = useState({
    latitude: 37.78825,
    longitude: -122.4324
  });

  const [anotherMarker, setAnotherMarker] = useState({
    latitude: 0,
    longitude: 0
  });

  const mapDefaultRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }

  return (
    <View style={styles.container}>
      <MapView
        style= {styles.map}
        initialRegion={ mapDefaultRegion }
        onPress= { (e) => setAnotherMarker( e.nativeEvent.coordinate )}
      >
         <Marker draggable
          key={1}
          coordinate={ marker }
          title={'teste'}
          description={`${marker.latitude}, ${marker.longitude}`}
          onDragEnd={(e) => setMarker( e.nativeEvent.coordinate )}
        />
        <Marker draggable
          key={2}
          coordinate={ anotherMarker }
          title={'teste'}
          description={`${marker.latitude}, ${marker.longitude}`}
          onDragEnd={(e) => setAnotherMarker( e.nativeEvent.coordinate )}
        />
      </MapView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export default NativeMaps;
