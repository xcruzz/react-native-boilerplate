import globalStyles from '../../../theme/styles'
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Details from 'scenes/details'
import Map from 'scenes/map'
import ALugaro from 'scenes/alugaro'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

const styles = globalStyles.stacks

const navigationProps = {
  headerTintColor: colors.white,
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

export const MapNavigator = createStackNavigator({
  Map: {
    screen: Map,
    navigationOptions: () => ({
      headerShown: false,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Candidatos',
      ...navigationProps,
    }),
  },
})

export const ALugaroNavigator = createStackNavigator({
  ALugaro: {
    screen: ALugaro,
    navigationOptions: ({ navigation }) => ({
      title: 'LÚGARO 2020',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
})
