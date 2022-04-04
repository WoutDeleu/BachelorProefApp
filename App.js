// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/routes/AuthStack';



class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
          <AuthStack/>
      </NavigationContainer>
    );
    }
}

// Base color: #212529