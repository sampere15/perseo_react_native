import React, { useEffect } from "react";
import { View, Text } from "react-native";
import Loading from "../components/loading/Loading";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilesAction } from "../redux/actions/mediaActions";

const Home = () => {
  const dispatch = useDispatch();
  const { downloading } = useSelector( state => state.media);

  //  Request for data to the API
  useEffect( () => {
    dispatch(getFilesAction());
  }, []);

  return (
    <View>
      <Text>Home</Text>
      <Loading 
        isVisible={downloading} 
        text="Downloading data..."
      />
    </View>
  );
};

export default Home;
