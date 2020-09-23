import globalStyles from '../../../theme/styles'
import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from 'theme'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import Home from 'scenes/home'
import Details from 'scenes/details'
import Map from 'scenes/map'
import ALugaro from 'scenes/alugaro'
import NewsFeed from 'scenes/newsfeed'
import Candidaturas from 'scenes/candidaturas'
import Articulo from 'scenes/articulo'

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
      title: 'Detalles',
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
  Candidaturas: {
    screen: Candidaturas,
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

export const NewsFeedNavigator = createStackNavigator({
  NewsFeed: {
    screen: NewsFeed,
    navigationOptions: ({ navigation }) => ({
      title: 'Noticias',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Articulo: {
    screen: Articulo,
    navigationOptions: () => ({
      title: 'Artículo',
      ...navigationProps,
    }),
  },
})
