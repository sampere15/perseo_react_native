import React from 'react';
import PropTypes from "prop-types";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Image } from "react-native-elements";
import { Global } from "../../utils/global";
import FavIcon from "./FavIcon";
import Toast from "react-native-simple-toast";

export default function ItemMediaList({navigation, item, height, showFav = true}) {
  //  Calculate the width for the given height
  const width = 9/16*height;

  const styles = StyleSheet.create({
    image: {
      height: "100%",
      width: width,
      borderRadius: 5,
      resizeMode: "cover",
      margin: 1,
    },
  });

  return (
    <TouchableOpacity 
      onPress={() => navigation.navigate("mediadetails", { itemId: item.id })}
      onLongPress={() => Toast.show(item.title, Toast.SHORT)}
    >
      <Image 
        source={{ uri: item.cover }}
        style={styles.image}
        PlaceholderContent={<ActivityIndicator size="large" color={Global.corporativeColor} />}
      />
      {showFav &&
        <FavIcon 
          item={item}
        />
      }
    </TouchableOpacity>
  );
}

ItemMediaList.propTypes = {
  item: PropTypes.object.isRequired,
  navigation: PropTypes.object,
  height: PropTypes.number,
  showFav: PropTypes.bool,
}