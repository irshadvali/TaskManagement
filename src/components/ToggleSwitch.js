import React from "react";
import { View, Switch } from "react-native";
import PropTypes from "prop-types";
const ToggleSwitch = props => {
  return (
    <View>
      <Switch onValueChange={props.toggleSwitch} value={props.value} />
    </View>
  );
};
export default ToggleSwitch;
ToggleSwitch.propTypes = {
  onValueChange: PropTypes.func,
  value: PropTypes.bool
};
