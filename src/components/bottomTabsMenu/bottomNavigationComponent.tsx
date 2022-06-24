import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import NativeMaps from '../map/NativeMapsComponent';
import { FontAwesome5 } from '@expo/vector-icons'; 

const MusicRoute = () => <Text>Music</Text>;

const MapRoute = () => <NativeMaps/>;

const RecentsRoute = () => <Text>Recents</Text>;

const TabsNavigation = () => {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', icon: () => <FontAwesome5 name="hand-holding-heart" size={24} color="white" /> },
    { key: 'map', title: 'Map', icon: () => <FontAwesome5 name="map-marked-alt" size={24} color="white" /> },
    { key: 'config', title: 'Config', icon: () => <FontAwesome5 name="tools" size={24} color="white" /> }
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    map: MapRoute,
    config: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default TabsNavigation;