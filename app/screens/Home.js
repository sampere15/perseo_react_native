import React, { useEffect } from "react";
import { ScrollView, View, Text, StatusBar, StyleSheet, SafeAreaView, RefreshControl } from "react-native";
import MediaList from "../components/media/MediaList";
import LoadingScreen from "../components/loading/LoadingScreen";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilesAction } from "../redux/actions/mediaActions";

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const { files, filesBySection, user, downloading } = useSelector( state => state.media);
  const favourites = files.filter( file => user.favs.includes(file.id));
  const last = files.filter( file => user.lastShowed.includes(file.id));

  const refreshData = () => {
    if(!downloading) {
      dispatch(getFilesAction());
    }
  }


  if(downloading) {
    return(
      <LoadingScreen isVisible={true} text="Downloading data..." />
    );
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
      {files && files.length > 0 ?
        <>
          <MediaList 
            navigation={navigation}
            title="Last Showed"
            files={last}
            height={180} 
          />
          <MediaList 
            navigation={navigation}
            title="Favourites"
            files={favourites}
            height={250} 
          />
          {/* Create a MediaList for each section */}
          {Object.keys(filesBySection).map( key => 
            <MediaList 
              key={key}
              navigation={navigation}
              title={key}
              files={filesBySection[key]}
            />
          )}
        </>
      :
        <Text>Nothing found...</Text>
      }
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