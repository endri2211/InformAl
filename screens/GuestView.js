import React, { useState,  

  useEffect, Component
 } from 'react';
import { StyleSheet, TouchableOpacity, View, StatusBar, SafeAreaView, Dimensions, MapView, Image, FlatList, ActivityIndicator,
  RefreshControl} from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
  import Swiper from 'react-native-web-swiper';
import { render } from 'react-dom';
import * as firebase from 'firebase'
import 'firebase/firestore';
export default function GuestView() {
const App = () => {
  let onEndReachedCalledDuringMomentum = false;

  const [isLoading, setIsLoading] = useState(false);
  const [isMoreLoading, setIsMoreLoading] = useState(false);
  const [lastDoc, setLastDoc] = useState(null);
  const [restaurants, setRestaurants] = useState([]);

  const restaurantsRef = firestore().collection('Gastronomi');

  useEffect(() => {
    getRestaurants();
  }, []);

  getRestaurants = async () => {
    setIsLoading(true);

    const snapshot = await restaurantsRef.orderBy('id').limit(3).get();

    if (!snapshot.empty) {
      let newRestaurants = [];

      setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

      for (let i = 0; i < snapshot.docs.length; i++) {
        newRestaurants.push(snapshot.docs[i].data());
      }

      setRestaurants(newRestaurants);
    } else {
      setLastDoc(null);
    }

    setIsLoading(false);
  }

  getMore = async () => {
    if (lastDoc) {
      setIsMoreLoading(true);

      setTimeout(async() => {
      let snapshot = await restaurantsRef.orderBy('id').startAfter(lastDoc.data().id).limit(3).get();

      if (!snapshot.empty) {
        let newRestaurants = restaurants;

        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

        for(let i = 0; i < snapshot.docs.length; i++) {
          newRestaurants.push(snapshot.docs[i].data());
        }

        setRestaurants(newRestaurants);
        if (snapshot.docs.length < 3) setLastDoc(null);
      } else {
        setLastDoc(null);
      }

      setIsMoreLoading(false);
    }, 1000);
    }

    onEndReachedCalledDuringMomentum = true;
  }

  renderList = ({ name, photo, budget, tags, rating, isNew }) => {
    return (
      <View style={styles.list}>
        <Image source={{ uri: photo }} style={styles.listImage} />
        <View style={styles.listingRatingContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={star} style={{ marginRight: 5 }}/>
              <Text style={styles.rating}><Text style={{ fontWeight: 'bold' }}>{rating}</Text>/5</Text>
          </View>
        </View>
        <View style={styles.budgetTagsContainer}>
          <Text style={[styles.budgetTagsText, budget <= 3 && {color: '#276FBF'}]}>$</Text>
          <Text style={[styles.budgetTagsText, budget <= 3 && budget !== 1 && {color: '#276FBF'}]}>$</Text>
          <Text style={[styles.budgetTagsText, budget === 3 && {color: '#276FBF'}]}>$</Text>
          <View>
            <Text numberOfLines={1} style={styles.budgetTagsText}>, {tags.join()}</Text>
          </View>
        </View>
        {isNew && (
          <View style={styles.newContainer}>
            <Text style={styles.newText}>NEW</Text>
          </View>
        )}
      </View>
    )
  }

  onRefresh = () => {
    setTimeout(() => {
      getRestaurants();
    }, 1000);
  }

  renderFooter = () => {
    if (!isMoreLoading) return true;
    
    return (
      <ActivityIndicator
          size='large'
          color={'#D83E64'}
          style={{ marginBottom: 10 }}
      />
    )
  }





  return (
  

  
    
        <View style={styles.container}>
        <StatusBar
          backgroundColor="rgb(174, 121, 132)"
          barStyle="light-content"
        />
        
            <View style={styles.sliderContainer}
              
            ><Swiper horizontal={false}
            timeout={3}
            loop
            
            height={200}><View style={styles.slide}>
                <Image source={require('../assets/swipe/12_daniel_can_bc-207.jpg')}
                resizeMode='cover' style={styles.sliderImage}/></View>
                <View style={styles.slide}>
                <Image source={require('../assets/swipe/emo-happiness.jpg')}
                resizeMode='cover'style={styles.sliderImage} /></View>
                <View style={styles.slide}>
                <Image source={require('../assets/swipe/nature1_gettyimages.jpg')}
                resizeMode='cover' style={styles.sliderImage}/></View>
                <View style={styles.slide}>
                <Image source={require('../assets/swipe/96d0a32e8ab168eac62d8beee2ffabf7.17.jpg')}
                resizeMode='cover' style={styles.sliderImage}/></View>
              
              </Swiper> 
              
              
              
          </View>
              
             

          
          
           
            <View style={{
               flex:1 ,
               
            }}> 
              

            

            </View>
        
        
        </View>
        
        );
          }
          



        
    

    
const styles = StyleSheet.create({
    container: {
      flex: 1,

    
    }, 
    container: {
      flex: 1,
    },
    sliderContainer: {
      height: 150,
      width: '90%',
      marginTop: 10,
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 8,
    },
  
    wrapper: {},
  
    slide: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: 'transparent',
      borderRadius: 8,
    },
    sliderImage: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
    },
    categoryContainer: {
      flexDirection: 'row',
      width: '90%',
      alignSelf: 'center',
      marginTop: 25,
      marginBottom: 10,
    },
    categoryBtn: {
      flex: 1,
      width: '30%',
      marginHorizontal: 0,
      alignSelf: 'center',
    },
    categoryIcon: {
      borderWidth: 0,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      width: 70,
      height: 70,
      backgroundColor: '#fdeae7' /* '#FF6347' */,
      borderRadius: 50,
    },
    categoryBtnTxt: {
      alignSelf: 'center',
      marginTop: 5,
      color: '#de4f35',
    },
    cardsWrapper: {
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    card: {
      height: 100,
      marginVertical: 10,
      flexDirection: 'row',
      shadowColor: '#999',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
    },
    cardImgWrapper: {
      flex: 1,
    },
    cardImg: {
      height: '100%',
      width: '100%',
      alignSelf: 'center',
      borderRadius: 8,
      borderBottomRightRadius: 0,
      borderTopRightRadius: 0,
    },
    cardInfo: {
      flex: 2,
      padding: 10,
      borderColor: '#ccc',
      borderWidth: 1,
      borderLeftWidth: 0,
      borderBottomRightRadius: 8,
      borderTopRightRadius: 8,
      backgroundColor: '#fff',
    },
    cardTitle: {
      fontWeight: 'bold',
    },
    cardDetails: {
      fontSize: 12,
      color: '#444',
    }, 
    
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 70,
      paddingTop: 20
    },
    headerLogo: {
      width: 30,
      height: 30,
      marginRight: 10
    
    
    },
    title: {
      fontWeight: '300',
      fontSize: 26,
      marginVertical: 10,
      marginLeft: 10,
      color: '#333333'
    },
    list: {
      width: '25%',
      justifyContent: 'center',
      paddingHorizontal: 5,
      marginBottom: 20,
      marginLeft: 25
    
      
    },
    

    listImage: {
      width: '100%',
      height: 100,
      borderRadius: 20,
      flexDirection: 'row',
      justifyContent: 'center'
    
      
  
      
      
      
    },
   
    listingRatingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: 10
    },
    name: {
      fontWeight: '500',
      fontSize: 17, 
      color: '#333333'
    },
   
    budgetTagsContainer: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center'
    },
    
    
    newContainer: {
      position: 'absolute',
      top: 20,
      left: 10,
      backgroundColor: '#D83E64',
      paddingHorizontal: 20,
      paddingVertical: 10
    },
   
})}