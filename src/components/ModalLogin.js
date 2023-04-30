import React, { useState } from 'react';
import { Text,
SafeAreaView,
View,
TextInput,
StyleSheet,
Pressable,
Image,
ActivityIndicator,
Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const ModalLogin = () =>{

  const navigation = useNavigation();
  const [load,setLoad]=useState(false)

  const handlerIngresar = ()=>{

    setLoad(true)
    setTimeout(() => {
      navigation.navigate('DashBoardUser')

    }, 3000);
    

  }



    return (
     <SafeAreaView>
      <View style={style.contenedorFormulario}>
          <Text style={style.textoSecundario}>Welcome!</Text>
          <Text style={style.textoSecundarioForm}>Email</Text>
          <TextInput
          style={style.input}
          placeholderTextColor='lightgray'
          placeholder='Enter your email'/>
         
          <Text style={style.textoSecundarioForm}>Password</Text>
          <TextInput 
          secureTextEntry={true}
          style={style.input}
          placeholderTextColor='lightgray'
          placeholder='Enter your email'
          />
        
        
     <ActivityIndicator
     animating={load}
     size='large'
     color='#b721ff'
     style={style.indicador}
     />
          
          <Pressable 
          onPress={handlerIngresar}
          style={style.btnRegister}>
            <Text style={style.textBtn}>Login</Text>
          </Pressable>
          <Text style={style.password}>
          forgot your password?
          </Text>
          
          </View>
     </SafeAreaView>
    );
  }

  const style= StyleSheet.create({
    texto:{
        color:'#1d1d1d',
        fontSize:40
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
  password:{
    color:'#b721ff',
    fontSize:15,
    marginTop:20
  },
  btnRegister:{
    backgroundColor:'#b721ff',
    height:60,
    marginTop:60,
    borderRadius:10
},
textBtn:{
  fontSize:30,
  textAlign:'center',
  color:'#fff',
  fontWeight:700,
  marginTop:5
  
  
},
indicador: {
  marginTop:30
}
  })
export default ModalLogin;