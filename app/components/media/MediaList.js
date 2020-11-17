import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import ItemMediaList from "./ItemMediaList";

export default function MediaList({navigation, title, files, height = 180}) {
  //  We pass the height of the component passed via props
  const styles = height => StyleSheet.create({
    flatListContainer: {
      backgroundColor: "green",
      height: height,
    }
  });

  return (
    <View>
      <Text>{title}</Text>
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