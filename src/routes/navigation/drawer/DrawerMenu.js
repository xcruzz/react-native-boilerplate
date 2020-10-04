import NetInfo from '@react-native-community/netinfo'
import globalStyles from '../../../theme/styles'
import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  Linking,
} from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from 'theme'

const styles = globalStyles.drawerMenu

const DrawerMenu = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.gray}
        backgroundColor="white"
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ALugaro', {
            from: 'DrawerMenu',
          })
        }}
      >
        <Text style={styles.head}>Lúgaro 2020</Text>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home', {
            from: 'DrawerMenu',
          })
        }}
      >
        <Text style={styles.head}>Agenda Urgente</Text>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Map', {
            from: 'DrawerMenu',
          })
        }}
      >
        <Text style={styles.head}>Mapa de Candidatxs</Text>
      </TouchableOpacity>
      <Text />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('CandiBrowser', {
            from: 'DrawerMenu',
          })
        }}
      >
        <Text style={styles.head}>Conoce todxs los Candidatxs</Text>
      </TouchableOpacity>
      <Text />
    </View>
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
