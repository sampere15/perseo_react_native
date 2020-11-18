import React from 'react'
import { Button } from "react-native-elements";

//  Redux
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../redux/actions/authActions";

export default function Logout() {
  //  Needed for call redux actions
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.auth);

  return (
    <Button
      title="Sign Out"
      onPress={() => dispatch(logoutAction())}
      loading={loading}
    />
  )
}
