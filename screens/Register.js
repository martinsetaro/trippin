import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
TextInput,
Input,
ScrollView,
Modal } from 'react-native';
import profiler from '../src/img/profile.png'
import ModalLogin from '../src/components/ModalLogin';

const Register = () =>{
    return (
     <SafeAreaView style={style.container}>
        <ScrollView>
      <View style={style.containerForm}>
        <Text style={style.texto}>Welcome to</Text>
        <Text style={style.subTexto}>Trippin</Text>
        <View style={style.contenedorFormulario}>
          <Text style={style.textoSecundario}>Create your free acount</Text>
          <Text style={style.textoSecundarioForm}>Email</Text>
          <TextInput
          style={style.input}
          placeholderTextColor='lightgray'
          placeholder='Enter your email'/>
          <Text style={style.textoSecundarioForm}>User</Text>
          <TextInput 
          style={style.input}
          placeholderTextColor='lightgray'
          placeholder='Enter your email'
          />
          <Text style={style.textoSecundarioForm}>Password</Text>
          <TextInput 
          style={style.input}
          placeholderTextColor='lightgray'
          placeholder='Enter your email'
          />
          <Text style={style.textoSecundarioForm}>Repeat Password</Text>
          <TextInput
          style={style.input}
          placeholderTextColor='lightgray'
          placeholder='Enter your email'
          />
          <Pressable style={style.btnRegister}>
            <Text style={style.textBtn}>Register acount</Text>
          </Pressable>
          <Text style={style.line}>---------- Or ----------</Text>
          <Pressable style={style.btn}>
            <Text style={style.textBtn}>I have an account</Text>
          </Pressable>
        </View>
      </View>
      <Modal
      visible={false}
      animationType='slide'
      >
        <ModalLogin/>
      </Modal>
      </ScrollView>
     </SafeAreaView>
    );
  }

  const style= StyleSheet.create({
    container:{
     backgroundColor:'#fff',
     flex:1
    },
    containerForm:{
       height:1200
    },
    texto:{
        fontSize:40,
        color:'#1d1d1d',
        fontFamily:'Pacifico-Regular',
        textAlign:'center',
        marginBottom:-40,
        marginTop:40
    },
    subTexto:{
        fontSize:60,
        color:'#1d1d1d',
        fontFamily:'Pacifico-Regular',
        textAlign:'center'
    },
    imagen:{
        
        width:200,
        height:200,
        marginHorizontal:120,
        marginTop:30
    },
    contenedorFormulario:{
        width:350,
        marginHorizontal:30
        
    },
    textoSecundario:{
        fontFamily:'ArvoBold',
        color:'#1d1d1d',
        fontSize:20,
        textAlign:'center',
        marginTop:50,
        marginBottom:40
    },
    textoSecundarioForm:{
        marginBottom:10,
        color:'#1d1d1d',
        fontSize:15,
    },
    input:{
        color:'#1d1d1d',
        borderWidth:1,
        borderColor:'#1d1d1d',
        fontSize:20,
        marginTop:5,
        marginBottom:15
        
    },
    btn:{
        backgroundColor:'#71B1FF',
        height:60,
        marginTop:50

    },
    btnRegister:{
        backgroundColor:'#EFA94F',
        height:60,
        marginTop:60
    },
    textBtn:{
        fontSize:30,
        textAlign:'center',
        color:'#fff',
        fontWeight:700,
        marginTop:5
        
        
    },
    line:{
        color:'#1d1d1d',
        textAlign:'center',
        fontSize:20,
        marginTop:30
    }
  })
export default Register;