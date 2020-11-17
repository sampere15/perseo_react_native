import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axiosClient from "../utils/axios";
import tokenManager from "../utils/tokenManager";

export default function MediaDetails(props) {
  //  Extra the file id
  const {itemId} = props.route.params;
  const [downloading, setDownloading] = useState(true);
  console.log(itemId);

  useEffect(() => {
    downloadMedia();
  }, []);
  
  //  Function to download media info
  const downloadMedia = async () => {
    try {
      setDownloading(true);
      const token = await tokenManager.getTokenSecureStore();

      let formData = new FormData();
      formData.append("token", token);
      formData.append("device", "Android");
      formData.append("id", itemId);

      console.log(formData);

      const {data} = await axiosClient.getMediaInfo(formData);
      console.log(data);

      setDownloading(false);
    } catch (error) {
      console.log(error.response);
      setDownloading(false);
    }
  }

  //  We show indicator while info is downloaded
  if(downloading) {
    return <ActivityIndicator style={styles.activityIndicator} size="large" color="#ccc" />
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.videoContainer}>
      
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.mainInfo}>
          <Text>Title</Text>
          <Text>Votes</Text>
        </View>
        <View style={styles.restInfo}>
          <Text>Duration</Text>
          <Text>Range</Text>
          <Text>Section</Text>
        </View>
        <View style={styles.descriptionInfo}>
          <Text>Description</Text>
        </View>
      </View>
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
    flexDirection: "column",
  },
  videoContainer: {
    flex: 1,
    backgroundColor: "orange",
  },
  infoContainer: {
    flex: 1,
    backgroundColor: "yellow",
    padding: 10
  },
  mainInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "purple",
  },
  restInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "green",
    flexDirection: "row",
  },
  descriptionInfo: {
    flex: 2,
    backgroundColor: "red",
  }
});