import { View, Text, Button } from "react-native";
import { useState } from "react";
import axios from "axios"


function GetStudents({route, navigation}) {
  const { studentId } = route.params;
  const baseURL = 'http://localhost:8081/'
  //const localtunnel = require('localtunnel');

  const baseUrl = Platform.OS === 'android' ? 'http://10.0.2.2' : 'http://localhost';

  const [users, setUsers] = useState("");

    const getUsers = async () => {
        var axios = require('axios');
        var base = 'http://192.168.20.181:8081/userManagement/users/';
        var url_user =  base + route.params.studentId;
        console.log(url_user);

        var config = {
            method: 'get',
            url: url_user,
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3YW5uZXMudmVybWVpcmVuQHN0dWRlbnQua3VsZXV2ZW4uYmUiLCJyb2xlcyI6WyJST0xFX1NUVURFTlQiXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2F1dGhlbnRpY2F0aW9uL2xvZ2luIiwiZXhwIjoxNjQ2NzQ4NzgxfQ.l3RuXUuYXaBFqohQw5jaUZGArvexrRzgT3tCG-oycQc'
            }
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });

    };


  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>id: {JSON.stringify(studentId)}</Text>
        <Text>{users}</Text> 
        <Button title="Get Advice" onPress={getUsers} color="green" />

      </View>
  );
}
export default GetStudents;
