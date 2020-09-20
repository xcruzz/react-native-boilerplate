import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

// stack navigators
import { HomeNavigator, MapNavigator } from '../stacks'

const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeNavigator,
      navigationOptions: { title: 'Inicio' },
    },
    MapTab: {
      screen: MapNavigator,
      navigationOptions: { title: 'Mapa' },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        switch (routeName) {
          case 'HomeTab':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.victoryGold : colors.gray}
                size={20}
                solid
              />
            )
          case 'MapTab':
            return (
              <FontIcon
                name="map"
                color={focused ? colors.victoryGold : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
      initialRouteName: 'Home',
      tabBarOptions: {
        activeTintColor: colors.victoryGold,
        inactiveTintColor: colors.gray,
        style: {
          backgroundColor: colors.darkGray,
        },
      },
      tabBarVisible: navigation.state.routeName != 'MapTab',
      swipeEnabled: false,
    }),
  },
)

export default TabNavigator
