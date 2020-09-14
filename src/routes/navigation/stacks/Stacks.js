import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkGray },
  headerTitleStyle: { fontSize: 18 },
}

export const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Inicio',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Artículo',
      ...navigationProps,
    }),
  },
})
