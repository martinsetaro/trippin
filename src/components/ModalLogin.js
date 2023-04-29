import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';

const ModalLogin = () =>{
    return (
     <SafeAreaView>
      <View>
        <Text style={style.texto}>Login</Text>
      </View>
     </SafeAreaView>
    );
  }

  const style= StyleSheet.create({
    texto:{
        color:'#1d1d1d',
        fontSize:40
    }
  })
export default ModalLogin;