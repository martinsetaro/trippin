import React from 'react'
import { 
Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image
} from 'react-native'
import * as Animatable from 'react-native-animatable';



const HomeScreen = () => {

  

  return (
    <SafeAreaView
    style={style.container}
    >
     <ImageBackground
     source={require('../src/img/backgroundHome.jpg')}
     style={style.imgBackground}
     resizeMode='cover'
     >
      <Animatable.Image
      animation="slideInDown" iterationCount={5} direction="alternate"
      source={require('../src/img/round.png')}
      style={style.image}
      />
      <Pressable
      
      style={style.btn}
      >
        <Animatable.Text
        animation="pulse" easing="ease-out" iterationCount="infinite"
        style={style.texto}
        >
          Enter
        </Animatable.Text>
      </Pressable>

     </ImageBackground>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  imgBackground:{
    flex:1
  },
  container:{
    flex:1
  },
  image:{
    marginHorizontal:120,
    marginTop:260
  },
  btn:{
    marginHorizontal:120,
    marginTop:60,
    width:180,
    height:50,
    backgroundColor:'orange',
    borderRadius:10
    
  },
  texto:{
    fontSize:30,
    textAlign:'center',
    fontWeight:700,
    textTransform:'uppercase'
    
  }
})



export default HomeScreen
