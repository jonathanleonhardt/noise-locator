import {  StatusBar } from 'react-native';
import TabsNavigation from './src/components/bottomTabsMenu/bottomNavigationComponent';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  return (
    <>
      <PaperProvider>
        <StatusBar />
        <TabsNavigation />
      </PaperProvider>
    </>
  );
}
