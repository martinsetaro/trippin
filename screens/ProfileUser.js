import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';

const ProfileUser = () =>{
    return (
     <SafeAreaView>
      <View>
        <Text style={style.texto}>User profile</Text>
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
export default ProfileUser;