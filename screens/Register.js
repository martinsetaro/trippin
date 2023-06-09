import React, { useState } from 'react';
import { Text,
SafeAreaView,
View,
StyleSheet,
Pressable,
TextInput,
ScrollView,
Modal, 
ImageBackground} from 'react-native';
import ModalLogin from '../src/components/ModalLogin';


const Register = () =>{

const [modal,setModal] = useState(false)

const handlerModal = ()=>{
setModal(true)

}




    return (
     <SafeAreaView style={style.container}>
      
        <ScrollView>
        <ImageBackground
       source={require('../src/img/bannerRegister.png')}
       resizeMode='cover'
       >
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
          <Pressable 
          onPress={handlerModal}
          style={style.btn}>
            <Text style={style.textBtn}>I have an account</Text>
          </Pressable>
        </View>
      </View>
      <Modal
      visible={modal}
      animationType='fade'
      >
        <ModalLogin/>
      </Modal>
       </ImageBackground>
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
        marginTop:80
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
        marginBottom:15,
        paddingLeft:10
        
    },
    btn:{
      
      height:60,
      width:300,
      marginTop:60,
      marginHorizontal:25,
      borderRadius: 4,
      borderColor:'#16A8DE',
      borderWidth:1,
  shadowColor: '#000',
  shadowOffset: {
    width: 6,
    height: 6,
  }
 

    },
    btnRegister:{
      height:60,
      width:300,
      marginTop:60,
      marginHorizontal:25,
      borderRadius: 4,
      borderColor:'#16A8DE',
      borderWidth:1,
  shadowColor: '#000',
  shadowOffset: {
    width: 6,
    height: 6,
  }
    },
    textBtn:{
        fontSize:30,
        textAlign:'center',
        color:'#16A8DE',
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