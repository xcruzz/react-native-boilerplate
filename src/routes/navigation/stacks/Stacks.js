import globalStyles from '../../../theme/styles'
import React from 'react'
import Platform from 'react-native'
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack'
import { colors } from 'theme'
import HeaderTitle from './HeaderTitle'
import Home from 'scenes/home'
import Details from 'scenes/details'
import Map from 'scenes/map'
import ALugaro from 'scenes/alugaro'
import CandiBrowser from 'scenes/candibrowser'
import Candidaturas from 'scenes/candidaturas'

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
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Candidaturas: {
    screen: Candidaturas,
    navigationOptions: ({ navigation }) => ({
      title: '',
      headerBackTitleVisible: true,
      left: '',
      headerLeft: (
        <HeaderBackButton
          onPress={() => {
            navigation.navigate('Map')
          }}
          title="Regresar"
          backTitleVisible={true}
          tintColor={colors.white}
        />
      ),
      ...navigationProps,
    }),
  },
})

export const ALugaroNavigator = createStackNavigator({
  ALugaro: {
    screen: ALugaro,
    navigationOptions: ({ navigation }) => ({
      headerShown: false,
      headerTitle: <HeaderTitle />,
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
      title: 'Lúgaro 2020',
      headerTitle: <HeaderTitle />,
      headerLeft:
        Platform.OS === 'ios' ? (
          <HeaderBackButton
            onPress={() => {
              navigation.navigate('Map')
            }}
            title="Regresar"
            backTitleVisible={false}
            tintColor={colors.white}
          />
        ) : null,
      ...navigationProps,
    }),
  },
  Candidaturas: {
    screen: Candidaturas,
    navigationOptions: ({ navigation }) => ({
      title: 'Candidaturas',
      headerLeft: null,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      headerLeft: null,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
})

export const CandidatxsNavigator = createStackNavigator({
  CandiBrowser: {
    screen: CandiBrowser,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Candidaturas: {
    screen: Candidaturas,
    navigationOptions: ({ navigation }) => ({
      headerLeft: null,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
})
