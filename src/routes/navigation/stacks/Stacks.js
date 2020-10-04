import globalStyles from '../../../theme/styles'
import React from 'react'
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack'
import { colors } from 'theme'
import Text from 'react-native'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import Home from 'scenes/home'
import Details from 'scenes/details'
import Map from 'scenes/map'
import ALugaro from 'scenes/alugaro'
import NewsFeed from 'scenes/newsfeed'
import Articulo from 'scenes/articulo'
import CandiBrowser from 'scenes/candibrowser'
import Candidaturas from 'scenes/candidaturas'
import { color } from 'react-native-reanimated'

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
      //headerLeft: <HeaderLeft navigation={navigation} />,
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
    navigationOptions: ({ navigation }) => ({
      title: 'Candidatxs',
      headerBackTitleVisible: true,
      left: 'Regresar',
      headerLeft: (
        <HeaderBackButton
          onPress={() => {
            navigation.navigate('Map')
          }}
          title="Regresar"
          backTitleVisible={true}
          tintColor={'white'}
        ></HeaderBackButton>
      ),
      // headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
})

export const ALugaroNavigator = createStackNavigator({
  ALugaro: {
    screen: ALugaro,
    navigationOptions: ({ navigation }) => ({
      title: 'Lúgaro 2020',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      headerShown: false,
      ...navigationProps,
    }),
  },
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      title: 'Regresar',
      from: 'ALugaroNavigator',
      ...navigationProps,
    }),
  },
  CandiBrowser: {
    screen: CandiBrowser,
    navigationOptions: ({ navigation }) => ({
      title: 'Candidatxs',
      //headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Candidaturas: {
    screen: Candidaturas,
    navigationOptions: ({ navigation }) => ({
      title: 'Candidatxs',
      ...navigationProps,
    }),
  },
})

export const NewsFeedNavigator = createStackNavigator({
  NewsFeed: {
    screen: NewsFeed,
    navigationOptions: ({ navigation }) => ({
      title: 'Noticias',
      headerLeft: <HeaderLeft navigation={{ navigation }} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Articulo: {
    screen: Articulo,
    navigationOptions: ({ navigation }) => ({
      title: 'Artículo',
      ...navigationProps,
    }),
  },
})

export const CandidatxsNavigator = createStackNavigator({
  CandiBrowser: {
    screen: CandiBrowser,
    navigationOptions: ({ navigation }) => ({
      title: 'Regresar',
      //headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Candidaturas: {
    screen: Candidaturas,
    navigationOptions: () => ({
      title: 'Candidatxs',
      ...navigationProps,
    }),
  },
})
