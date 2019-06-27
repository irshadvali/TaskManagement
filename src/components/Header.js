import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  TextInput,
  LayoutAnimation,
  UIManager,
  Platform,
  Text
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { withNavigation } from "react-navigation";
import PropTypes from "prop-types";
import { DrawerActions } from "react-navigation";
import styles from "../styles/HeaderStyles";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchBox: false
    };
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }
  openSearch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({
      showSearchBox: !this.state.showSearchBox
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.left}
            // onPress={this.openSearch}
            //if we want drawer uncomment below line
            onPress={() =>
              this.props.navigation.dispatch(DrawerActions.toggleDrawer())
            }
          >
            <Icon name="ios-menu" size={30} color="#FFF" />
          </TouchableOpacity>
          {/* <View style={styles.center}>
            <Icon name="logo-github" size={30} color="#FFF" />
          </View>
          <TouchableOpacity style={styles.right}>
            <Icon name="md-notifications" size={30} color="#FFF" />
          </TouchableOpacity> */}
        </View>
        {this.state.showSearchBox && (
          <View>
            <View style={styles.searchBox}>
              <TextInput
                placeholder={"Search"}
                placeholderTextColor={"white"}
                selectionColor={"white"}
                style={styles.textInput}
              />
            </View>
            <Text style={styles.headerItem}>Dashboard</Text>
            <View style={styles.divider} />
            <Text style={styles.headerItem}>Pull requests</Text>
            <View style={styles.divider} />
            <Text style={styles.headerItem}>Issues</Text>
            <View style={styles.divider} />
            <Text style={styles.headerItem}>Marketplace</Text>
            <View style={styles.divider} />
            <Text style={styles.headerItem}>Explore</Text>
          </View>
        )}
      </View>
    );
  }
}
export default withNavigation(Header);
Header.propTypes = {
  changeBaseTheme: PropTypes.func
};
