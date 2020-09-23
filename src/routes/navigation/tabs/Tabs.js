import globalStyles from '../../../theme/styles'
import React from 'react'
import { View, Image } from 'react-native'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors, images } from 'theme'

// stack navigators
import {
  HomeNavigator,
  MapNavigator,
  ALugaroNavigator,
  NewsFeedNavigator,
} from '../stacks'

const styles = globalStyles.navigation
const TabNavigator = createBottomTabNavigator(
  {
    HomeTab: {
      screen: HomeNavigator,
      navigationOptions: { title: 'Agenda Urgente' },
    },
    ALugaroTab: {
      screen: ALugaroNavigator,
      navigationOptions: { title: 'Lúgaro 2020' },
    },
    MapTab: {
      screen: MapNavigator,
      navigationOptions: { title: 'Candidatxs' },
    },
    NewsFeedTab: {
      screen: NewsFeedNavigator,
      navigationOptions: { title: 'Noticias' },
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
                  focused ? images.victoria_icon_white : images.victoria_icon
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
          case 'NewsFeedTab':
            return (
              <Image
                style={styles.nav_icon}
                source={
                  focused ? images.newsfeed_icon_white : images.newsfeed_icon
                }
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

export default TabNavigator
