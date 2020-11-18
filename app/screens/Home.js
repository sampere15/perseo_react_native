import React from "react";
import { ScrollView, StyleSheet, SafeAreaView, RefreshControl } from "react-native";
import MediaList from "../components/media/MediaList";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilesAction } from "../redux/actions/mediaActions";

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const { files, user, downloading } = useSelector( state => state.media);
  const favourites = files.filter( file => user.favs.includes(file.id));
  const last = files.filter( file => user.lastShowed.includes(file.id));

  const refreshData = () => {
    dispatch(getFilesAction());
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}
        refreshControl={
          <RefreshControl
            refreshing={downloading}
            onRefresh={refreshData}
          ></RefreshControl>
        }
      >
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
    </SafeAreaView>
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