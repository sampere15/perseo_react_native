import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ItemMediaList from "./ItemMediaList";

export default function MediaList({height = 180}) {
  
  const files = [
    {
      id: 1,
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
    {
      id: 2,
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
    {
      id: 3,
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
    {
      id: 4,
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
    {
      id: 5,
      cover: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQujAu6RsAWa1Wd-jdlI5ScYSt6-qAGjX8sGGmkHdesGK5LXQOv"
    },
    {
      id: 6,
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
      {/* <ItemMediaList item={file} /> */}
      {/* {files.map( file => <ItemMediaList key={file.id} item={file} />)} */}

      <FlatList 
        data={files}
        horizontal
        contentContainerStyle={styles(height).flatListContainer}
        renderItem={({item}) => (
          <ItemMediaList key={item.id} item={item} height={height} />
        )}
      />
    </View>
  )
}