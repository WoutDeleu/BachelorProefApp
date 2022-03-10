import { View, Text, Button } from "react-native";
improt

function GetStudents({route, navigation}) {
  const { id } = route.params;
  
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>id: {JSON.stringify(id)}</Text>
      </View>
  );
}
export default GetStudents;
