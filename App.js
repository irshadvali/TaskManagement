import React, { Component } from "react";
import { View, StatusBar,Text } from "react-native";
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
} from "react-navigation";
import configureStore from "./configStore";
import { Provider } from "react-redux";
import DrawerScreen from "./src/screens/DrawerScreen";
import Header from "./src/components/Header";
import RestaurantList from "./src/screens/RestaurantList";
import DetailsScreen from "./src/screens/DetailsScreen";
import colors from "./src/utils/colors";
import Profile from "./src/containers/ProfileContainer";
import ScreenTwo from "./src/screens/ScreenTwo";
import CreateTaskContainer from "./src/containers/CreateTaskContainer"
import TaskList from "./src/containers/TaskListContainer"
import TaskDetailsContainer from "./src/containers/TaskDetailsContainer"

const mainStack = createStackNavigator({
  TaskList:{screen:TaskList},
  Profile:{screen:Profile},
  ScreenTwo:{screen:ScreenTwo},
  RestaurantList: { screen: RestaurantList }
  
});
RootStack = createDrawerNavigator(
  {
    Main: {
      screen: mainStack
    }
  },
  {
    drawerWidth: 260,
    drawerPosition: "left",
    contentComponent: DrawerScreen,
    drawerBackgroundColor: "white",
    navigationOptions: ({ navigation }) => {
      return {
        header: <Header />
      };
    }
  }
);
const AppStack = createStackNavigator({
  RootStack: { screen: RootStack },
  DetailsScreen: { screen: DetailsScreen },
  CreateTaskContainer:{ screen: CreateTaskContainer },
  TaskDetailsContainer:{screen:TaskDetailsContainer}
  
});
const AppContainer = createAppContainer(AppStack);
export default class App extends Component {
  constructor(props) {
    super(props);
    // Text.defaultProps.allowFontScaling = false;
    // TextInput.defaultProps.allowFontScaling = false;
    this.state = {
      isLoading: true,
      store: configureStore(() => this.setState({ isLoading: false })),
    };
  }
  
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return (
      <Provider store={this.state.store}>
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.statusbarColor} />
          <AppContainer />
      </View>
      </Provider>
    );
  }
}