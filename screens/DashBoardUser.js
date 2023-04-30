import React, { useState } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Register from './Register';
import Settings from './Settings';
import ProfileUser from './ProfileUser';
import Messages from './Messages';
import Logout from './Logout';


const Tab = createBottomTabNavigator();

const DashBoardUser = () =>{





    return (
    
       
      <Tab.Navigator
      initialRouteName="User"
      >
        <Tab.Screen 
      name="User" 
      component={ProfileUser}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("../src/img/user.png")}
                  resizeMode="contain"
                  style={{ width: 25 }}
                />
              </View>
            );
          },
      }}
      />
      
      <Tab.Screen 
      name="Messages" 
      component={Messages}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("../src/img/edit.png")}
                  resizeMode="contain"
                  style={{ width: 25 }}
                />
              </View>
            );
          },
      }}
      />
      <Tab.Screen 
      name="Settings" 
      component={Settings}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("../src/img/settings.png")}
                  resizeMode="contain"
                  style={{ width: 25 }}
                 
                />
              </View>
            );
          },
      }}
      />
      <Tab.Screen 
      name="Logout" 
      component={Logout}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => {
            return (
              <View>
                <Image
                  source={require("../src/img/logout.png")}
                  resizeMode="contain"
                  style={{ width: 25 }}
                 />
              </View>
            );
          },
      }}
      />
      
    </Tab.Navigator>
   
    
    );
  }
export default DashBoardUser;