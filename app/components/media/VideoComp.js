import React from 'react';
import { Video } from "expo-av";

export default function VideoComp() {
  return (
    <Video
      // source={{ uri: data.url }}
      source={{ uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" }}
      rate={1.0}
      volume={1.0}
      isMuted={false}
      resizeMode="cover"
      useNativeControls={true}
      style={{ height: "100%"}}
    />
  )
}
