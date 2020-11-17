import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ItemMediaList from "./ItemMediaList";

export default function MediaList({navigation, height = 180}) {
  
  const files = [
    {
      id: 1,
      title: "Avengers",
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
    {
      id: 2,
      title: "Avengers",
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
    {
      id: 3,
      title: "Avengers",
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
    {
      id: 4,
      title: "Avengers",
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
    {
      id: 5,
      title: "Avengers",
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
    {
      id: 6,
      title: "Avengers",
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
  ]

  //  We pass the height of the component passed via props
  const styles = height => StyleSheet.create({
    flatListContainer: {
      backgroundColor: "green",
      height: height,
    }
  });

  return (
    <View>
      <Text>Favourites</Text>
      <FlatList 
        data={files}
        keyExtractor={(item, index) => index.toString()}
        renderItem={ ({item}) => (
          <ItemMediaList 
            navigation={navigation}
            key={item.id} 
            item={item} 
            height={height} 
          />
        )}
        horizontal
        contentContainerStyle={styles(height).flatListContainer}
      />
    </View>
  )
}