import React, { useState } from 'react';
import { SearchBar } from "react-native-elements";

//  Redux
import { useSelector, useDispatch } from "react-redux";
import { filterItemsAction } from "../../redux/actions/mediaActions";

export default function MySearchBar() {
  const dispatch = useDispatch();
  //  To control when user has stopped
  const [typingTimeOut, setTypingTimeOut] = useState(null);
  const [criteria, setCriteria] = useState("");
  const {filter} = useSelector(state => state.media);

  //  
  const updateSearch = (search) => {
    setCriteria(search);
    //  If user continues typing we clear the timer configured and create a new one
    if(typingTimeOut) {
      clearTimeout(typingTimeOut);
    }

    //  We call action when 1 second has passed from last type
    setTypingTimeOut(setTimeout(() => {
      dispatch(filterItemsAction(search));
    }, 500));
  }

  return (
    <SearchBar
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={criteria}
      defaultValue={filter}
    />
  )
}
