import React,{ useState , useEffect } from 'react'
import { 
Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import Presentacion from '../src/components/Presentacion';



const HomeScreen = () => {

  const[modal,setModal] = useState(false)
 
   useEffect(()=>{

    setTimeout(()=>{
      setModal(true)
    },4000)
    

   },[])
  

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
      </ImageBackground>

      <Modal
      visible={modal}
      animationType='slide'
      >
        <Presentacion/>

      </Modal>

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
    
  }

})



export default HomeScreen
