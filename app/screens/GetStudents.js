import { View, Text, Button } from "react-native";
import axios from "axios"


function GetStudents({route, navigation}) {
  const { id } = route.params;

  // const test = axios.crreate({baseURL:'http://localhost:8081/'})
  
  
  // test.get('/userManagement/users/student').then(res => {
  //   console.log(res.data)
  //   this.setState({students: res.data})
  // })

  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>id: {JSON.stringify(id)}</Text>
      </View>
  );
}
export default GetStudents;
