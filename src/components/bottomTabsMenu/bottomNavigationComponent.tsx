import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import NativeMaps from '../map/NativeMapsComponent';

const MusicRoute = () => <Text>Music</Text>;

const MapRoute = () => <NativeMaps/>;

const RecentsRoute = () => <Text>Recents</Text>;

const TabsNavigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'map', title: 'Map', focusedIcon: 'map' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    map: MapRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ backgroundColor: '#694fad' }}
    />
  );
};

export default TabsNavigation;