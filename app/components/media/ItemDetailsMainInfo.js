import React from 'react';
import PropTypes from "prop-types";
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Divider } from "react-native-elements";
import FavIcon from "./FavIcon";
import Rating from "./Rating";

export default function ItemDetailsMainInfo({item}) {
  return (
    <ScrollView style={styles.infoContainer}>
      <View style={styles.mainInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.rating}>
          <Rating 
            votes={item.votes}
            totalVotes={item.totalVotes}
            baseRating={5}
          />
        </View>
      </View>
      <Divider style={{ backgroundColor: "grey" }} />
      <View style={styles.restInfo}>
        <FavIcon
          item={item}
          containerStyle={{position: "relative"}}
        />
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
  )
}

ItemDetailsMainInfo.propTypes = {
  item: PropTypes.object.isRequired
}


const styles = StyleSheet.create({
  infoContainer: {
    flex: 1,
    padding: 10,
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
    marginVertical: 10,
  },
  descriptionInfo: {
    flex: 2,
    marginTop: 5,
    marginBottom: 20,
  },
});