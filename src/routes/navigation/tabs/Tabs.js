import globalStyles from '../../../theme/styles'
import React from 'react'
import { View, Image, Platform } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors, images } from 'theme'

// stack navigators
import {
  HomeNavigator,
  MapNavigator,
  ALugaroNavigator,
  CandidatxsNavigator,
} from '../stacks'

const styles = globalStyles.navigation
const IOSNavigator = createBottomTabNavigator(
  {
    ALugaroTab: {
      screen: ALugaroNavigator,
      navigationOptions: { title: 'Lúgaro 2020' },
    },
    HomeTab: {
      screen: HomeNavigator,
      navigationOptions: { title: 'Agenda Urgente' },
    },
    MapTab: {
      screen: MapNavigator,
      navigationOptions: { title: 'Mapa' },
    },
    CandidatxsTab: {
      screen: CandidatxsNavigator,
      navigationOptions: { title: 'Candidatxs' },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        switch (routeName) {
          case 'ALugaroTab':
            return (
              <Image
                style={styles.nav_icon}
                source={
                  focused ? images.alugaro_arco_white : images.alugaro_arco_grey
                }
              />
            )
          case 'HomeTab':
            return (
              <Image
                style={styles.nav_icon}
                source={
                  focused
                    ? images.victoria_icon_white
                    : images.victoria_icon_grey
                }
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
          case 'CandidatxsTab':
            return (
              <FontIcon
                name="users"
                color={focused ? colors.victoryGold : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
      initialRouteName: 'HomeTab',
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

const AndroidNavigator = createBottomTabNavigator(
  {
    ALugaroTab: {
      screen: ALugaroNavigator,
      navigationOptions: { title: 'Lúgaro 2020' },
    },
    HomeTab: {
      screen: HomeNavigator,
      navigationOptions: { title: 'Agenda Urgente' },
    },
    CandidatxsTab: {
      screen: CandidatxsNavigator,
      navigationOptions: { title: 'Candidatxs' },
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        switch (routeName) {
          case 'ALugaroTab':
            return (
              <Image
                style={styles.nav_icon}
                source={
                  focused ? images.alugaro_arco_white : images.alugaro_arco
                }
              />
            )
          case 'HomeTab':
            return (
              <Image
                style={styles.nav_icon}
                source={
                  focused
                    ? images.victoria_icon_white
                    : images.victoria_icon_grey
                }
              />
            )
          case 'CandidatxsTab':
            return (
              <FontIcon
                name="users"
                color={focused ? colors.victoryGold : colors.gray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
      initialRouteName: 'HomeTab',
      tabBarOptions: {
        activeTintColor: colors.victoryGold,
        inactiveTintColor: colors.gray,
        style: {
          backgroundColor: colors.darkGray,
        },
      },
      tabBarVisible: true,
      swipeEnabled: false,
    }),
  },
)

const TabNavigator = Platform.OS === 'ios' ? IOSNavigator : AndroidNavigator
export default TabNavigator
