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

  return (
    <View>
      <Text style={styles.textStyles}>Hello React-Native</Text>
      <Text style={{fontSize:20,color:"black",marginTop:20,paddingLeft:10}}>Your Name is : {name}</Text>
      <TextInput placeholder='Enter Name' style={styles.textInput} 
      value={name}
      onChangeText={(e) => setName(e)}
      />
      <Button title='Clear Text' onPress={() => setName("")} />
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
  paddingLeft : 10
  }  
  
})


export default App;
