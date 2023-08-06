import React from 'react';
import {
  Button,
  Text,
  View,
} from 'react-native';

function App(){
 const pressBtn = () => {
  console.warn("pressed")
 }
  return (
    <View>
      <Text style={{fontSize: 25}}>Hello React-Native</Text>
      <Text style={{fontSize: 25}}>Learning React-Native</Text>
      <Text style={{fontSize: 25}}>Learning to make Hybrid application</Text>
      <Button title='Press Here' color={"green"} onPress={pressBtn}></Button>
    </View>
  );
}



export default App;
