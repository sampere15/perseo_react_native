import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Divider } from "react-native-elements";
import axiosClient from "../utils/axios";
import tokenManager from "../utils/tokenManager";
import VideoComp from "../components/media/VideoComp";
import ItemDetailsMainInfo from "../components/media/ItemDetailsMainInfo";
import Toast from "react-native-simple-toast";

//  Mock data for testing
// import mockData from "../mockData/mockMedia2";

export default function MediaDetails(props) {
  //  Extra the file id
  const {itemId} = props.route.params;
  const [downloading, setDownloading] = useState(true);
  const [item, setItem] = useState(null);

  //  Set title
  if(item) {
    props.navigation.setOptions({title: item.title});
  }

  useEffect(() => {
    downloadMedia();
  }, []);
  
  //  Function to download media info
  const downloadMedia = () => {
    setDownloading(true);

    tokenManager.getTokenSecureStore()
      .then(token => {
        let formData = new FormData();
        formData.append("token", token);
        formData.append("device", "Android");
        formData.append("id", itemId);

        axiosClient.getMediaInfo(formData)
          .then(({data}) => {
            setItem(data);
            setDownloading(false);
          })
          .catch(err => {
            console.log(err.response);    
            Toast.show("Ha ocurrido un error. Inténtelo más tarde", Toast.LONG);
            setDownloading(false);
          });
      })
      .catch(err => {
        console.log(err.response);
        Toast.show("Ha ocurrido un error. Inténtelo más tarde", Toast.LONG);
        setDownloading(false);
      });
  }

  //  We show indicator while info is downloaded
  if(downloading) {
    return <ActivityIndicator style={styles.activityIndicator} size="large" color="#ccc" />
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
        <VideoComp 
          url={item.url} 
        />
      </View>
      <Divider style={{ backgroundColor: "grey" }} />
      <ItemDetailsMainInfo 
        item={item}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  videoContainer: {
    flex: 1,
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});