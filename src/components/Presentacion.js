import React, {useRef , useState } from 'react';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import { Text,
SafeAreaView,
View,

StyleSheet,
Pressable,
Image,

Dimensions,
 } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import image1 from '../img/bicicletasR.webp';
import image2 from '../img/trayectos.webp';
import image3 from '../img/senderoR.webp';
import image4 from '../img/chat.webp';
import Carousel from 'react-native-snap-carousel';






const Presentacion = () =>{
  
  const navigation = useNavigation();

 const entries = [
        { id: 1, image: image1 , title:"Tour the city or places you can enjoy with your bike, rollerblade or just walking." },
        { id: 2, image: image2 , title:"Choose a route, enjoy parks, forests, or maybe within the city you will discover incredible options." },
        { id: 3, image: image3 , title:"Connect with nature, alone or in company, although in pairs sounds more fun."},
        { id: 4, image: image4 , title:"You can connect with another person who has the same tastes as you, why not travel together! " },
      ]

      
      const carouselRef = useRef(null);
    
      const renderItem = ({ item, index }) => {
        return (
          <View style={style.contenedorImg}>
            <Image source={item.image} style={style.image}/>
            <Text style={style.texto}>{item.title}</Text>
             <View>
             {index === 3 ? <Pressable onPress={handlerNavegar} style={style.btn}>
              <Text style={style.textoBtn}>Enter</Text>
             </Pressable>  : <Text style={style.textoNext}>Next   ▶</Text>}
            </View>
          </View>
        );
      };
    
      const sliderWidth = Dimensions.get('window').width;
      const itemWidth = Dimensions.get('window').width * 10;
    
     
const handlerNavegar = ()=>{
    navigation.navigate('Register')
}
    

    return (
     <SafeAreaView style={style.container}>
     
    <Carousel
          ref={carouselRef}
          data={entries}
          renderItem={renderItem}
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
        />
     
     </SafeAreaView>
    );
  }

  const style = StyleSheet.create({
    container:{
      flex:1
    },
   
    texto:{
        fontSize:20,
        color:'#1d1d1d',
        width:300,
        textAlign:'center',
        marginLeft:60,
        marginTop:20,
        
        
    },
    points:{
       fontSize:70,
       color:'#1d1d1d',
       marginLeft:180,
       marginTop:-30
    },
    contenedorImagenes:{
        width:'auto',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:'auto',
        
    },
    contenedorImg:{
        
        height:400,
        marginTop:120
        
        

    },
    image:{
        width:370,
        height:320,
        marginLeft:30,
        marginTop:50
    },
    btn:{
        borderColor:'#1d1d1d',
        borderWidth:1,
        width:300,
        marginHorizontal:60,
        marginTop:40,
        height:60
       
        
    },
    textoNext:{
        fontSize:20,
        color:'#1d1d1d',
        marginLeft:160,
        marginTop:40,
        textAlign:'center',
        width:120,
        padding:10
    },
    textoBtn:{
        fontSize:20,
        color:'#1d1d1d',
        textAlign:'center',
        marginTop:15,
        textTransform:'uppercase'
        
    }
})
export default Presentacion;