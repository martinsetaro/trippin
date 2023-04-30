import React, {useState } from 'react';
import { Text,
SafeAreaView,
View,
ImageBackground,
StyleSheet,
Pressable,
Image,
Modal } from 'react-native';
import img1 from '../img/parana.jpg'
import img2 from '../img/atuel.jpg'
import img3 from '../img/machupichu.jpg'
import heart from '../img/heart.png'
import heartFull from '../img/heartFull.png'





const VisitedSite = () =>{

     const[ pictures , setPictures] = useState([
        {id:1,pic:img1,liked:false, title:"River Paraná",country:"Argentina", info:"The Parana River is very beautiful, the waters are very refreshing and I would spend the whole day there."},
        {id:2,pic:img2,liked:false, title:"Atuel canyon",country:"Argentina", info:"I was amazed with the nature of the place."},
        {id:3,pic:img3,liked:false, title:"Machu Pichu",country:"Perú",info:"Machu Pichu is a dream place."}
    ])

     const handlerLike = (id) => {
        setPictures(prevPictures => prevPictures.map(picture => {
          if (picture.id === id) {
            return { ...picture, liked: !picture.liked };
          } else {
            return picture;
          }
        }));
      };


    return (
     <SafeAreaView>
      <View>
        <Text style={style.texto}>Visited Site</Text>
        {pictures.map( item => {
            return(
                <View
                style={style.containerInfo}
                key={item.id}>
                    <Image style={style.imagen} source={item.pic} />
                    <Text style={style.title}>{item.title}</Text>
                    <Text style={[style.info, { fontSize: 20 , marginBottom:10 }]}>{item.country}</Text>
                    <Text style={style.info}>&quot;{item.info}&quot;</Text>
                   <Pressable
                    onPress={() => handlerLike(item.id)}
                    >
                    <Image 
                    style={{width:40, height:40,marginTop:60,marginLeft:20}}source={!item.liked ? heart : heartFull}/>
                    </Pressable>
                   
                </View>
            )
        })}
      </View>
     </SafeAreaView>
    );
  }

  const style = StyleSheet.create({
    texto:{
        fontSize:40,
        color:'#b721ff',
        marginTop:60,
        marginBottom:30,
        marginLeft:100
      },
      containerInfo:{
        width:'100%',
        height:550,
        borderWidth:1,
        borderColor:'#ececec',
        marginBottom:40,
        shadowColor: "#1d1d1d",
        shadowOffset: {
        width: 0,
        height: 3,
         },
        shadowOpacity:  0.18,
        shadowRadius: 4.59,
        elevation: 5
      },
      title:{
        color:'#b721ff',
        fontSize:25,
        marginLeft:10,
        marginTop:20
      },
      info:{
        color:'#1d1d1d',
        fontSize:20,
        marginLeft:10,
        width:400
      },
      imagen:{
        height:250
      }
  })
export default VisitedSite;