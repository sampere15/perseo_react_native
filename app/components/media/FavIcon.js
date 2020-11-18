import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import { Icon } from "react-native-elements";
import { Global, FAV_MARKED, FAV_UNMARKED } from '../../utils/global';
import Toast from "react-native-simple-toast";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { markItemFavAction } from "../../redux/actions/mediaActions";

//  Default configuration
export default function FavIcon({
    item,
    iconNameActive = "heart", 
    iconNameInactive = "heart-o",
    iconType = "font-awesome", 
    activeColor = Global.favColor, 
    containerStyle = {position: "absolute", top: 8, right: 8}
  }) {

  // console.log(item);

  const dispatch = useDispatch();
  const { favs } = useSelector(state => state.media.user);
  //  Check if this item is marked as fav or not
  item.fav = favs.includes(item.id);

  const onFavClick = () => {
    dispatch(markItemFavAction(item.id, !item.fav));
    Toast.show(item.fav ? FAV_UNMARKED : FAV_MARKED, Toast.SHORT);
  }

  //  Recheck each time favs changes
  useEffect(() => {
    item.fav = favs.includes(item.id);
  }, [favs]);

  return (
    <Icon 
      name={item.fav ? iconNameActive : iconNameInactive}
      type={iconType}
      color={Global.favColor}
      onPress={onFavClick}
      containerStyle={containerStyle}
    />
  )
}

FavIcon.propTypes = {
  item: PropTypes.object.isRequired,
  iconNameActive: PropTypes.string,
  iconNameInactive: PropTypes.string,
  iconType: PropTypes.string,
  activeColor: PropTypes.string,
  containerStyle: PropTypes.object
}