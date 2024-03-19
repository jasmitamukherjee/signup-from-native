import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert,Button, ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  // const [counter,setCounter] = useState(0)

  // function increament(){
  //   setCounter(counter+1)
  // }
  // function decreament(){
  //   setCounter(counter-1)
  // }

  const [name,setName]= useState("");
  const handleClick=()=>{
    // alert("pressed")
    if(name.length <3){
      Alert.alert("Name must be atleast 3 characters",[{text:"Cancel"},{text:"Okay"}])
    }
  }
  return (

<ImageBackground style={styles.body} source={{uri:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsX29mZmljZV8yM193YXRlcmNvbG9yX2lsbHVzdHJhdGlvbl9vZl9ncmVlbl9wYXN0ZWxfYmFja181Zjg4YmIwZS0xNWZkLTRkNGItYTNlNS0zZDYyOTdiNjk3NDdfMS5qcGc.jpg"}}>
{/* 
    <View style={styles.container}>
      <Text>Counter= {counter}</Text>
      <StatusBar style="auto" />
      <Button title="increament" onPress={increament} color={'green'}></Button>
      <Button title="decreament" onPress={decreament} color={'red'}></Button>
    </View> */}
    

    <Text style={styles.heading}><u>Register here</u></Text>
    <Text style={styles.label}>Name :</Text>
    <TextInput placeholder='Enter your name' style={styles.textinput} onChangeText={(value)=>setName(value)}></TextInput>
    <Button title="Submit"  onPress={handleClick}>Submit</Button>
    <Text style={styles.label}>The name is {name}</Text>
    
    </ImageBackground>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  body:{
    flex:1,
    width:'auto',
    height:'auto'
  },
  heading:{
    fontSize:50

  },
  label:{
    marginTop:30,
    fontSize:35,
    marginBottom:20
    

  },
  textinput:{
    // width:"60%",
    // alignItems:'center',
    // border:"2px solid black"
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    textAlign: 'left',
    fontSize:15,
    marginTop: 5,
    marginLeft: 20,
    marginBottom:5,
    marginRight: 20,
  },
  
});
// new add



