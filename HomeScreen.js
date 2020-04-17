import React, {Component} from 'react';
import {View, Text, Button, TextInput, StatusBar} from 'react-native';

import {IconButton} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SecondScreen from './SecondScreen';
class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor="#8ac74a" />
        <View
          style={{
            backgroundColor: 'white',
            margin: 10,
            padding: 20,
          }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              paddingLeft: 10,
            }}>
            <Text style={{fontSize: 30}}>Product details</Text>
            <IconButton icon="plus" onPress={() => {}} />
          </View>
          <Text style={{fontSize: 20}}>Product Name</Text>
          <View>
            <TextInput
              style={{
                height: 40,
                width: '95%',
                borderRadius:5,
                borderColor: 'gray',
                borderWidth: 1,
                marginBottom: 20,
              }}
              placeholder="product"
              underlineColorAndroid="transparent"
            />
            <Text style={{fontSize: 20}}>Product ID</Text>
          </View>
          <TextInput
            style={{
              height: 40,
              width: '95%',
              borderRadius:5,
              borderColor: 'gray',
              borderWidth: 1,
              marginBottom: 20,
            }}
            // Adding hint in TextInput using Placeholder option.
            placeholder="product ID"
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{flex: 1, marginHorizontal: 30}}>
            <Button
              title="add"
              color="#8ac74a"
              onPress={() => this.props.navigation.navigate('screentwo')}
            />
          </View>
          <View style={{flex: 1, marginHorizontal: 30}}>
            <Button
              title="show details"
              color="#8ac74a"
              onPress={() => this.props.navigation.navigate('screentwo')}
            />
          </View>
        </View>
      </View>
    );
  }
}

const stacknav = createStackNavigator(
  {
    screenone: {
      screen: HomeScreen,
    },

    screentwo: {
      screen: SecondScreen,
    },
  },
  {
    initialRouteName: 'screenone',
  },
);
export default createAppContainer(stacknav);
