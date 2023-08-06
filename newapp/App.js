import React from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet
} from 'react-native';
import ExStyle from "./styles";
function App(){
 const pressBtn = () => {
  console.warn("pressed")
 }
  return (
    <View>
      <Text style={styles.textStyles}>Hello React-Native</Text>
      <Text style={styles.textStyles}>Learning React-Native</Text>
      <Text style={styles.textStyles}>Making Hybrid application</Text>
      <Text style={[styles.textStyles,ExStyle,{backgroundColor: "gray"}]}>Making Hybrid application</Text>
      <Button title='Press Here' color={"green"} onPress={pressBtn}></Button>
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
  } 

})


export default App;
