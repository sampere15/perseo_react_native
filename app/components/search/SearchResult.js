import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemMediaList from "../media/ItemMediaList";
import ResultList from "./ResultList";
import { Dimensions } from 'react-native';

//  Redux
import { useSelector } from "react-redux";

export default function SearchResult({navigation}) {
  const { filesFiltered, filter } = useSelector(state => state.media);

  const windowWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const marginBtItems = 1;
  const itemWidth = windowWidth / numColumns - numColumns * marginBtItems;
  const itemHeight = itemWidth * 16 / 9;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
    },
    item: {
      width: itemWidth,
      height: itemHeight,
      marginVertical: marginBtItems,
    },
    notFoundContainer: {
      flex: 1,
      alignItems: "center",
    },
    notFound: {
      fontSize: 30,
    }
  });
 
  //  If not reuslts found
  if(filesFiltered && filesFiltered.length === 0 && filter !== null) {
    return(
      <View style={styles.notFoundContainer}>
        <Text style={styles.notFound}>No results found</Text>
      </View>
    );
  } else if(filesFiltered && filesFiltered.length > 0) {
    return(
      <View style={styles.container}>
        {filesFiltered.map(item => 
          <View key={item.id} style={styles.item}>
            <ItemMediaList 
              item={item}
              navigation={navigation}
              height={itemHeight}
              showFav={false}
            />
          </View>
        )}
      </View>
    );
  }
  else {
    return null;
  }

}