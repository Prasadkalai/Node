import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  Text,
  TextInput,
  Button,
} from 'react-native';
import {IconButton} from 'react-native-paper';

class SecondScreen extends Component {
  render() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:40}}>product</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, marginHorizontal: 120}}>
        <Button title='back' color='#8ac74a' onPress={()=>this.props.navigation.navigate('screenone')}  />
    </View></View>
</View>
    );
  }
}

export default SecondScreen;
