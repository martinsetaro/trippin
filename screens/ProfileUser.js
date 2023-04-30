import React, { Component } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
ScrollView,
FlatList,
Modal } from 'react-native';
import VisitedSite from '../src/components/VisitedSites';

const ProfileUser = () =>{


  const interests = [
    "walk","ride a bicycle","outdoors","mountain"
  ]



    return (
     <SafeAreaView style={style.mainContainer}>
     <ScrollView>
      <View style={style.containerInfo}>
         <ImageBackground
         source={require('../src/img/bannerProfiler.png')}
         resizeMode='cover'
         style={style.backgroundImg}
         >
       <Image 
       style={style.imagen}
       source={require('../src/img/selfie.webp')}/>
       <Text  style={style.textoNombre}>Michel , 34</Text>
       <Text style={style.textoSecundarioSpan}>Photographer</Text>
       <Text style={style.textoSecundarioSpan}>Texas - U.S 🌍</Text>
       <Text style={style.textoSecundarioInterest} > About My</Text>
       <Text style={style.textoSecundarioSpan}>"Hi! I'm a passionate photographer with 34 years old. I love capturing unique moments and emotions with my camera. My creativity and ingenuity have allowed me to capture amazing images that have left more than one with their mouths open. I consider myself an artist in my field and my work speaks for itself.</Text>
       <Text style={style.textoSecundarioInterest} > Interests</Text>
       <View style={style.containerInterest}>
        {interests.map( item => {
        return(
          <View
          style={style.interests}
          key={item}>
            <Text style={style.textoInterest} >{item}</Text>
          </View>
        )
       })}
       </View>

        <VisitedSite/>
       
         </ImageBackground>
      </View>
     </ScrollView>
     </SafeAreaView>
    );
  }

  const style = StyleSheet.create({
    mainContainer:{
       flex:1
    },
    texto:{
      fontSize:40,
      color:'#1d1d1d',
      marginTop:60
    },
    containerInfo:{
  flex:1,
  height:6000
    },
    backgroundImg:{
      width:500,
      height:900
    },
    imagen:{
      width:250,
      height:250,
      borderRadius:100,
      marginTop:20,
      marginLeft:20
    },
    textoNombre:{
      fontSize:30,
      color:'#1d1d1d',
      fontWeight:'600',
      marginTop:30,
      marginLeft:10,
      
    },
    textoSecundario:{
      color:'#b721ff',
      fontSize:25,
      marginLeft:10,
      
    },
    textoSecundarioSpan:{
      color:'#1d1d1d',
      fontSize:20,
      marginLeft:10,
      width:400
      
    },
    textoSecundarioInterest:{
      color:'#b721ff',
      fontSize:25,
      marginLeft:140,
      marginTop:40
    },
    textoInterest:{
      fontSize:20,
      color:'#b721ff',
      textAlign:'center'

    },
    containerInterest:{
      width:410,
      height:'auto',
      flexDirection: 'row',
      flexWrap: 'wrap',
     justifyContent: 'space-around',
     alignItems: 'flex-start',
     paddingHorizontal: 10,
     marginTop:20
    
    
    },
    interests:{
      width: '40%',
      borderWidth:1,
      borderColor:'#b721ff',
      marginBottom: 10,
      marginTop:10,
      marginLeft:-10
      
    }

  })
export default ProfileUser;