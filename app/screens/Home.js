import React, { useEffect } from "react";
import { View, ScrollView, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import MediaList from "../components/media/MediaList";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilesAction } from "../redux/actions/mediaActions";

export default function Home({navigation}) {
  // const dispatch = useDispatch();
  const { files, user } = useSelector( state => state.media);
  const favourites = files.filter( file => user.favs.includes(file.id));
  const last = files.filter( file => user.lastShowed.includes(file.id));

  return (
    <ScrollView style={styles.container}>
      <MediaList 
        navigation={navigation}
        title="Recently"
        files={last}
        height={180} 
      />
      <MediaList 
        navigation={navigation}
        title="Favourites"
        files={favourites}
        height={250} 
      />
      <MediaList 
        navigation={navigation}
        title="Content"
        files={files}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    marginLeft: 5,
  }
});