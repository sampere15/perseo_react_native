import React from 'react';
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from "react-native-elements";

export default function Rating({votes, totalVotes, baseRating = 5}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon 
          name="star"
          type="font-awesome"
          color="#ffa500"
        />
      </View>
      <View style={styles.ratingContainer}>
        <Text style={styles.rateNumber}>{votes*baseRating/totalVotes}<Text style={styles.rateOver}>/{baseRating}</Text></Text>
        <Text style={styles.totaVotes}>{totalVotes} votes</Text>
      </View>
    </View>
  )
}

Rating.propTypes = {
  votes: PropTypes.number.isRequired,
  totalVotes: PropTypes.number.isRequired,
  baseRating: PropTypes.number
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  }, 
  iconContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  ratingContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  rateNumber: {
    fontSize: 20
  },
  rateOver: {
    fontSize: 12
  },
  totaVotes: {
    fontSize: 10
  },
});
