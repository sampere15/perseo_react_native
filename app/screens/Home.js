import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Loading from "../components/loading/Loading";
import MediaList from "../components/media/MediaList";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilesAction } from "../redux/actions/mediaActions";

export default function Home({navigation}) {
  const dispatch = useDispatch();
  const { downloading } = useSelector( state => state.media);

  //  Request for data to the API
  useEffect( () => {
    dispatch(getFilesAction());
  }, []);

  return (
    <View>
      <MediaList 
        navigation={navigation}
        height={200} 
      />
      <Loading isVisible={downloading} text="Downloading data..." />
    </View>
  );
};
