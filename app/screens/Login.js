import React from 'react';
import { StyleSheet, Icon, Text, View, TextInput, TouchableOpacity,Image, Dimensions } from 'react-native';



function Login() {
    const win = Dimensions.get('window');

    this.state ={
        email:"",
        password:"",
        icon:"eye-off",
        passwordVis: true
    }

    this.setEmail = function (param) {
        this.state.email = param;
    }
    this.setPasw = function (param) {
        this.state.password = param;
    }

    function changeIcon() {
        this.setState(prevState=>({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            password: !prevState.passwordVis
        }));
    }
    return(
        <View style={styles.container}>
            <Image
                source={require('../../assets/pics/KUL_FullLogo.png')}
                style={{
                    width: win.width/2,
                    height: (win.width/2646)*670,
                    resizeMode: "contain",
                    alignSelf: "center",
                    borderWidth: 1,
                    backgroundColor: "transparent"
                    //borderRadius: 20,
                }}
            />

            <View style={styles.inputView}>
                <TextInput
                    style={styles.inputText}
                    placeholder="Email..."
                    placeholderTextColor="#212521"
                    onChangeText={text => this.setEmail({email:text})}/>
            </View>
            <View style={styles.inputView} >
                <TextInput
                    secureTextEntry
                    style={styles.inputText}
                    placeholder="Password..."
                    placeholderTextColor="#212521"
                    onChangeText={text => this.setPasw({password:text})}/>
                <Icon name={eye}/>
            </View>
            <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.loginText}>Signup</Text>
            </TouchableOpacity>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
    },
    logo:{
        fontWeight:"bold",
        fontSize:50,
        color:"#fb5b5a",
        marginBottom:40
    },
    inputView:{
        width:"80%",
        backgroundColor:"#fff",
        borderRadius:25,
        borderColor:"#212521",
        borderWidth:2,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    },
    inputText:{
        height:50,
        color:"black"
    },
    forgot:{
        color:"black",
        fontSize:11
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#212521",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        marginBottom:10
    },
    loginText:{
        color:"white"
    }
});

export default Login;