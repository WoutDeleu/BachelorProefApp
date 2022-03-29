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
        /*
        axios
            .get("http://192.168.163.1:8081/userManagement/users")
            .then((response) => {
                console.log(response.json);
            });
        */
        var axios = require('axios');

        var config = {
            method: 'get',
            url: 'http://localhost:8081/userManagement/users',
            headers: {
                'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBrdWxldXZlbi5iZSIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2F1dGhlbnRpY2F0aW9uL2xvZ2luIiwiZXhwIjoxNjQ2NTExNjAxfQ.iaDXu5-pODnaMYBDLfvOVw61RZ5PPjOnSyCiocEZltA'
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
/*
    var axios = require('axios');

    var config = {
        method: 'get',
        url: 'http://localhost:8081/userManagement/users',
        headers: {
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbkBrdWxldXZlbi5iZSIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgxL2F1dGhlbnRpY2F0aW9uL2xvZ2luIiwiZXhwIjoxNjQ2NTExNjAxfQ.iaDXu5-pODnaMYBDLfvOVw61RZ5PPjOnSyCiocEZltA'
        }
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });
*/
    // axios({ method: 'get', url: '${baseURL}/users/1' }).then((response) => {
  //   console.log(response.data)
  // });

  // const getUsers = () => {
  //   fetch('http://localhost:8081/userManagement/users')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     console.log(responseJson);
  // })
  // }


  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>id: {JSON.stringify(studentId)}</Text>
        <Text>{users}</Text> 
        <Button title="Get Advice" onPress={getUsers} color="green" />

      </View>
  );
}
export default GetStudents;
