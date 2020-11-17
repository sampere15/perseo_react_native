import React, { useEffect } from "react";
import { View, ScrollView, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import Loading from "../components/loading/Loading";
import MediaList from "../components/media/MediaList";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilesAction } from "../redux/actions/mediaActions";

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const { downloading, files, user } = useSelector( state => state.media);
  let favourites = [];
  let last = [];
  
  //  Filter the data to pass them to the MediaList component
  if(user) {
    favourites = files.filter( file => user.favs.includes(file.id));
    last = files.filter( file => user.lastShowed.includes(file.id));
  }

  //  Request for data to the API
  useEffect( () => {
    dispatch(getFilesAction());
  }, []);

  if(downloading) {
    return <ActivityIndicator style={styles.activityIndicator} size="large" color="#ccc" />
  } 

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
      <Loading isVisible={downloading} text="Downloading data..." />
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