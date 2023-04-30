import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';

const Settings = () =>{
    return (
     <SafeAreaView>
      <View>
        <Text style={style.texto}>Settings</Text>
      </View>
     </SafeAreaView>
    );
  }


  const style = StyleSheet.create({
    texto:{
      fontSize:40,
      color:'#1d1d1d',
      marginTop:60
    }
  })
export default Settings;