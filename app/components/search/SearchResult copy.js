import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Loading from "../loading/Loading";
import ItemMediaList from "../media/ItemMediaList";
import ResultList from "./ResultList";
import { Dimensions } from 'react-native';

//  Redux
import { useSelector } from "react-redux";

export default function SearchResult() {
  const { filesFiltered, filter } = useSelector(state => state.media);
  const windowWidth = Dimensions.get('window').width;
  const numColumns = 3;
  const marginBtItems = 1;
  const itemWidth = windowWidth / numColumns - numColumns * marginBtItems;
  const itemHeight = itemWidth * 16 / 9;

  // const mock = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const mock = [
    {
      "cover": "https://www.pequeocio.com/wp-content/uploads/2012/11/el-rey-leon.jpg",
      "duration": 6677,
      "id": "e1b78b7b0d65fa017518b3039b320cb3",
      "section": "Infantil",
      "title": "Hasta siempre, hijo mío",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://4.bp.blogspot.com/-5ZdzsgvxLOM/UJGDqwcux7I/AAAAAAAAQAE/F1neDy786fQ/s1600/2012+movie+poster.jpg",
      "duration": 7303,
      "id": "6f04155a56c13f6c39e331912ce9f950",
      "section": "Infantil",
      "title": "Quien a hierro mata",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs8o90ZXT1ySx1Ug5ANR6lLcUh_JysREHTHQ&usqp=CAU",
      "duration": 7033,
      "id": "5c4f7ff3a1b75fd776575df6b62efeb8",
      "section": "Religión",
      "title": "Hasta siempre, hijo mío",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQs8o90ZXT1ySx1Ug5ANR6lLcUh_JysREHTHQ&usqp=CAU",
      "duration": 9538,
      "id": "f2d3d8d891d657eeb0fac5f2bbffa640",
      "section": "Documental",
      "title": "El vicio del poder",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://www.estrenosdecine.eu/media/k2/items/cache/25e7e3a7eccab06db002a4d0c71836ef_M.jpg",
      "duration": 5747,
      "id": "8ee972dc888a54661b92cc5092839966",
      "section": "Acción",
      "title": "Quien a hierro mata",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-15.jpg",
      "duration": 5176,
      "id": "674927484f22735dfaabb846329074f0",
      "section": "Drama",
      "title": "El vicio del poder",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/geminis/37423557-6-esl-ES/geminis.jpg",
      "duration": 10422,
      "id": "9fcf9eee1654b520b1366ee397a61b0a",
      "section": "Documental",
      "title": "Joker",
      "url": "https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRFBzUufOq67CGRRpW_sjzvrJlabAv85gy04w&usqp=CAU",
      "duration": 8548,
      "id": "a7b9d22419d5628e7f20801409ef6691",
      "section": "Acción",
      "title": "La casa de Jack",
      "url": "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8",
    },
    {
      "cover": "https://aws.revistavanityfair.es/prod/designs/v1/assets/377x580/87015.jpg",
      "duration": 7366,
      "id": "e4a35c800dc95735cacbc8d1509ed7c2",
      "section": "Parodia",
      "title": "La hija de un ladrón",
      "url": "http://devimages.apple.com/iphone/samples/bipbop/bipbopall.m3u8",
    },
    {
      "cover": "https://m.guiadelocio.com/var/guiadelocio.com/storage/images/cine/archivo-peliculas/geminis/37423557-6-esl-ES/geminis.jpg",
      "duration": 5289,
      "id": "7910bc247f14eb38c4c547c026949e16",
      "section": "Drama",
      "title": "El vicio del poder",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
    },
    {
      "cover": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTGFDQwA1PImgUTQCBru3MOv8sauT1e5hSJMQ&usqp=CAU",
      "duration": 3836,
      "id": "bc3c62e788d2c766d657ec5030a44564",
      "section": "Parodia",
      "title": "Mirai, mi hermana pequeña",
      "url": "https://multiplatform-f.akamaihd.net/i/multi/april11/sintel/sintel-hd_,512x288_450_b,640x360_700_b,768x432_1000_b,1024x576_1400_m,.mp4.csmil/master.m3u8",
    },
  ];

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      // justifyContent: "center",
      // backgroundColor: "orange",
      // justifyContent: "space-around",
      // alignContent: "center"
    },
    item: {
      width: itemWidth,
      height: itemHeight,
      marginVertical: marginBtItems,
      // backgroundColor: "blue",
    },
    notFoundContainer: {
      flex: 1,
      alignItems: "center",
    },
    notFound: {
      fontSize: 30,
    }
  });
 
  // //  If not reuslts found
  // if(filesFiltered.length === 0 && filter !== null) {
  //   return(
  //     <View style={styles.notFoundContainer}>
  //       <Text style={styles.notFound}>No results found</Text>
  //     </View>
  //   );
  // } 

  // return (
  //   <View>
  //     {filesFiltered.map( file => <Text key={file.id}>{file.title}</Text>)}
  //     {/* {filesFiltered.map( file => <ItemMediaList key={file.id} item={file} />)} */}
  //   </View>
  // )
  // return(
  //   // <View style={{flex: 1, backgroundColor: "red", height: "100%"}}>
  //     <ResultList />
  //   // </View>
  // );
  return(
    <View style={styles.container}>
      {mock.map(item => 
        <View key={item.id} style={styles.item}>
          <ItemMediaList 
            item={item}
            height={itemHeight}
            showFav={false}
          />
          {/* <Text>{item.title}</Text> */}
        </View>
      )}
    </View>
  );
}