import React, { useEffect } from "react";
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import Loading from "../components/loading/Loading";
import MediaList from "../components/media/MediaList";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilesAction } from "../redux/actions/mediaActions";

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const { downloading, files } = useSelector( state => state.media);
  const { favs, lastShowed } = useSelector(state => state.media.user);
  
  //  Filter the data to pass them to the MediaList component
  const favourites = files.filter( file => favs.includes(file.id));
  const last = files.filter( file => lastShowed.includes(file.id));

  //  Request for data to the API
  useEffect( () => {
    if(files.length === 0) {
      dispatch(getFilesAction());
    }
  }, []);

  if(downloading) {
    return <ActivityIndicator style={styles.activityIndicator} size="large" color="#ccc" />
  } 

  return (
    <View>
      <MediaList 
        navigation={navigation}
        title="Favourites"
        files={favourites}
        height={200} 
      />
      <Loading isVisible={downloading} text="Downloading data..." />
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});