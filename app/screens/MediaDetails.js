import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Divider } from "react-native-elements";
import axiosClient from "../utils/axios";
import VideoComp from "../components/media/VideoComp";
import ItemDetailsMainInfo from "../components/media/ItemDetailsMainInfo";
import Toast from "react-native-simple-toast";
import { Endpoints } from "../utils/global";

//  Mock data for testing
// import mockData from "../mockData/mockMedia2";

export default function MediaDetails(props) {
  //  Extract the file id
  const {itemId} = props.route.params;
  const [item, setItem] = useState(null);

  useEffect(() => {    
    //  Preparing formData
    let formData = new FormData();
    formData.append("id", itemId);

    axiosClient.post(Endpoints.PLAYER, formData)
      .then( ({data}) => {
        //  If error show toast and go back
        if(data.error) {
          Toast.show("Oh oh, file not found... Try again later", Toast.LONG);
          props.navigation.goBack();
        } else {
          setItem(data);
        }
      })
      .catch( (error) => {
        console.log(error);
        props.navigation.goBack();
      });
  }, []);

  if(item === null) {
    return <ActivityIndicator style={styles.activityIndicator} size="large" color="#ccc" />
  }
  
  if(item !== null) {
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