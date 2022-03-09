import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import GetStudents from "../screens/GetStudents";
import DetailsScreen from "../screens/DetailsScreen";

const AuthStack = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name = "Home" component={HomeScreen} />
      <AuthStack.Screen name= "GetStudents" component={GetStudents}/>
      <AuthStack.Screen name = "DetailsScreen" component={DetailsScreen}/>
    </AuthStack.Navigator>
  );


};

export default AuthStack;