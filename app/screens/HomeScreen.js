import { View, Text, Button,TextInput } from "react-native";
import React, { useState } from 'react';

function HomeScreen ({navigation}) {
  const [id, setId] = useState("");

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="UserId"
        keyboardType='numeric'
        onChange={(value)=>setId(value.nativeEvent.text)}
      />
      <Text>student_id: {Number(id)}</Text>

      <Button 
        title="GetStudent" 
        onPress={()=>{
          navigation.navigate('GetStudents', {studentId: Number(id) });
        }}
      />


      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('DetailsScreen', {
            itemId: 86,
            otherParam: {id},
          });
        }}
      />

      
  </View>
  );
}

export default HomeScreen;
