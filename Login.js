import React, { Component } from 'react';
import {View,StyleSheet, Text, TouchableOpacity,StatusBar,TextInput,Button,Image, ImageBackground,} from 'react-native';

class Login extends Component {
 
 render(){
    return (
     
       
    <ImageBackground source={require('./android/icon.png')} style={{width:375,height:700}}>
         <View style={{justifyContent:'center',flex:1,padding:16}}>
         <StatusBar backgroundColor="#7ef542" />
       
       <View style={{margin:200}}></View>
        <View style={{justifyContent:'center',alignItems:'center',marginBottom:20}}>
      <Text style={{color:'#e5efd8', fontSize: 40,justifyContent:'center'}}>Login</Text>
      </View>
      <TextInput style={{height:40,backgroundColor:'#e5efd8',margin:10,borderRadius:40}}
     
        autoCapitalize="none"
        placeholder="Email"
        onChangeText={text => this.setState({ text })}
      />
      <TextInput
      style={{height:40,backgroundColor:'#e5efd8',borderRadius:40,margin:10}}
     
        secureTextEntry
        autoCapitalize="none"
        placeholder="Password"
        
      />
      <View style={styles.button}>
      <Button style={{borderRadius:40}}  title="Login" color="#668f36" onPress={()=>this.props.navigation.navigate('STackscreenTwo')} />
  </View>
 
    </View>
    </ImageBackground>
  );
}
};

const styles = StyleSheet.create({  
  button: {    
    borderRadius:40,  
    margin: 10,  
    paddingHorizontal:100
  }  
})
export default Login;
