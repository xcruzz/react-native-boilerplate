import React from 'react'
import { View } from 'react-native'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from 'theme'
import HeaderTitle from './HeaderTitle'
import Home from 'scenes/home'
import Details from 'scenes/details'
import Map from 'scenes/map'
import ALugaro from 'scenes/alugaro'
import CandiBrowser from 'scenes/candibrowser'
import Candidaturas from 'scenes/candidaturas'
import ActiveLogo from '../../../components/ActiveLogo'

const navigationProps = {
  headerTintColor: colors.white,
  headerStyle: { backgroundColor: colors.darkGray },
  headerTitleStyle: { fontSize: 18 },
}

export const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
})

export const MapNavigator = createStackNavigator({
  Map: {
    screen: Map,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Candidaturas: {
    screen: Candidaturas,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <ActiveLogo
          onPress={() => {
            navigation.goBack()
          }}
          isHeader={true}
        />
      ),
      headerLeft: <View style={{ width: 0 }} />,
      ...navigationProps,
    }),
  },
})

export const ALugaroNavigator = createStackNavigator({
  ALugaro: {
    screen: ALugaro,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Map: {
    screen: Map,
    navigationOptions: ({ navigation }) => ({
      ...navigationProps,
      headerTitle: (
        <ActiveLogo
          onPress={() => {
            navigation.goBack()
          }}
          isHeader={true}
        />
      ),
      headerLeft: <View style={{ width: 0 }} />,
    }),
  },
  CandiBrowser: {
    screen: CandiBrowser,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <ActiveLogo
          onPress={() => {
            navigation.goBack()
          }}
          isHeader={true}
        />
      ),
      headerLeft: <View style={{ width: 0 }} />,
      ...navigationProps,
    }),
  },
  Candidaturas: {
    screen: Candidaturas,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <ActiveLogo
          onPress={() => {
            navigation.goBack()
          }}
          isHeader={true}
        />
      ),
      headerLeft: <View style={{ width: 0 }} />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <ActiveLogo
          onPress={() => {
            navigation.goBack()
          }}
          isHeader={true}
        />
      ),
      headerLeft: <View style={{ width: 0 }} />,
      ...navigationProps,
    }),
  },
})

export const CandidatxsNavigator = createStackNavigator({
  CandiBrowser: {
    screen: CandiBrowser,
    navigationOptions: () => ({
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Candidaturas: {
    screen: Candidaturas,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <ActiveLogo
          onPress={() => {
            navigation.goBack()
          }}
          isHeader={true}
        />
      ),
      headerLeft: <View style={{ width: 0 }} />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: ({ navigation }) => ({
      headerTitle: (
        <ActiveLogo
          onPress={() => {
            navigation.goBack()
          }}
          isHeader={true}
        />
      ),
      headerLeft: <View style={{ width: 0 }} />,
      ...navigationProps,
    }),
  },
})
