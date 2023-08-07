import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TextInput
} from 'react-native';
import ExStyle from "./styles";
function App(){
 const pressBtn = () => {
  console.warn("pressed")
 };
 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");
 const [display, setDisplay] = useState(false);
 const [showPass,setShowPass] = useState(true);
 const handleReset = () => {
  setDisplay(false);
  setName("");
  setEmail("");
  setPassword("");
 }
 const handlePassword = () => {
   if(showPass){
    setShowPass(false)
   }else{
    setShowPass(true)
   }
 }
  return (
    <View>
      <Text style={styles.textStyles}>Hello React-Native</Text>
      <TextInput placeholder='Enter Name' style={styles.textInput} 
      value={name}
      onChangeText={(e) => setName(e)}
      />
      <TextInput placeholder='Enter Email' style={styles.textInput} 
      value={email}
      onChangeText={(e) => setEmail(e)}
      />
      <View>
      <TextInput placeholder='Enter Password' secureTextEntry={showPass} style={[styles.textInput,{position:"relative"}]} 
      value={password}
      onChangeText={(e) => setPassword(e)}
      />
      <View style={{position:"absolute",right:15,bottom:15}}>
      <Button  title='show pass' onPress={handlePassword} />
      </View>
      </View>
      
      <View style={{marginBottom:10}}>
        <Button title='Print Detail' onPress={() => setDisplay(true)} />
      </View>
      <Button title='Clear Text' onPress={handleReset} />
      
      {display ? (<View>
        <Text style={{fontSize:18}}>
          Name is : {name}
        </Text>
        <Text style={{fontSize:18}}>
          Email is : {email}
        </Text>
        <Text style={{fontSize:18}}>
          Password is : {password}
        </Text>
      </View>) : null}
      
    </View>

  );
}

const styles = StyleSheet.create({
  textStyles : {
   fontSize : 25,
   color: "red",
   backgroundColor : "black",
   padding : 30,
   textAlign : "center",
   marginVertical : 10
  },
  textInput : {
  color: "blue",
  fontSize: 20,
  margin: 10,
  borderColor: "blue",
  borderWidth: 2,
  paddingLeft : 10,
  }  
  
})


export default App;
