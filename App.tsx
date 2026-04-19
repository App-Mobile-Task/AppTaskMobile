import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import MainTabs from './src/screens/MainTabs';

export default function App() {
  return (
    <NavigationContainer>
      <MainTabs />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}


