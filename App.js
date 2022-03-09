// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/routes/AuthStack';



function App() {
  return (
    <NavigationContainer>
        <AuthStack/>
    </NavigationContainer>
  );
}
export default App;