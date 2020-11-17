import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, ActivityIndicator } from 'react-native';
import { Rating, Divider } from "react-native-elements";
import axiosClient from "../utils/axios";
import tokenManager from "../utils/tokenManager";

//  Mock data for testing
import mockData from "../mockData/mockMedia2";

export default function MediaDetails(props) {
  //  Extra the file id
  const {itemId} = props.route.params;
  const [downloading, setDownloading] = useState(true);
  const [item, setItem] = useState(null);

  useEffect(() => {
    downloadMedia();
  }, []);
  
  //  Function to download media info
  const downloadMedia = async () => {
    try {
      setDownloading(true);
      // const token = await tokenManager.getTokenSecureStore();
      // console.log(`token: ${token}`);

      // let formData = new FormData();
      // formData.append("token", token);
      // formData.append("device", "Android");
      // formData.append("id", itemId);

      // console.log(formData);

      // const {data} = await axiosClient.getMediaInfo(formData);
      const data = mockData;
      console.log(data);
      setItem(data);

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
      <ScrollView style={styles.infoContainer}>
        <View style={styles.mainInfo}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.rating}>
            <Rating 
              imageSize={15}
              readonly
              // startingValue="{3.3}" 
              startingValue={item.votes*5/item.totalVotes}
            />
          </View>
        </View>
        <Divider style={{ backgroundColor: "grey" }} />
        <View style={styles.restInfo}>
          <Text>{new Date(item.duration * 1000).toISOString().substr(11, 5)}min</Text>
          <Text>{item.rating}</Text>
          <Text>{item.section}</Text>
        </View>
        <Divider style={{ backgroundColor: "grey" }} />
        <View style={styles.descriptionInfo}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id mauris vitae lectus sollicitudin varius. Phasellus ex tortor, posuere in eleifend id, gravida vitae sapien. Nulla vehicula a turpis vitae vestibulum. Ut luctus efficitur diam, a iaculis eros gravida vel. Vestibulum aliquam felis non euismod semper. Nunc justo libero, efficitur et enim id, viverra maximus urna. Cras vitae risus imperdiet, egestas purus eu, iaculis dui. Integer ac ante libero. Sed vel luctus purus. Phasellus sed nisi mauris. Suspendisse in molestie est, in facilisis erat. Phasellus lectus magna, vehicula ac euismod consectetur, hendrerit rhoncus sem. Etiam nec aliquet dolor. Maecenas quis metus accumsan, aliquam tortor eu, imperdiet tellus.
          </Text>
        </View>
      </ScrollView>
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
    backgroundColor: "#FFF",
    padding: 10
  },
  mainInfo: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    flex: 2,
    fontSize: 20,
  },
  rating: {
    flex: 1,
    alignItems: "flex-end",
  },
  restInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  descriptionInfo: {
    flex: 2,
    marginTop: 5,
  },
});