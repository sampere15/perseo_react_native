import React, { useEffect } from "react";
import { ScrollView, View, Text, StatusBar, StyleSheet, SafeAreaView, RefreshControl } from "react-native";
import MediaList from "../components/media/MediaList";
import Loading from "../components/loading/Loading";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilesAction } from "../redux/actions/mediaActions";

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const { files, filesBySection, user, downloading } = useSelector( state => state.media);
  const favourites = files.filter( file => user.favs.includes(file.id));
  const last = files.filter( file => user.lastShowed.includes(file.id));
  // let favourites;
  // let last;

  // useEffect(() => {
  //   if(files.length > 0) {
  //     favourites = files.filter( file => user.favs.includes(file.id));
  //     last = files.filter( file => user.lastShowed.includes(file.id));
  //   }
  // }, [files]);

  const refreshData = () => {
    if(!downloading) {
      dispatch(getFilesAction());
    }
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
            {/* <MediaList 
              navigation={navigation}
              title="Content"
              files={files}
            /> */}
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
          <Loading isVisible={downloading} text="Downloading data..." />
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