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
          NetInfo.fetch().then((state) => {
            if (state.isConnected) {
              Linking.openURL(
                'https://www.alexandralugaro2020.com/agendaurgente',
              )
            } else {
              navigation.navigate('Details', {
                from: 'Home',
                articleKey: 'agenda_urgente',
              })
            }
          })
        }}
      >
        <Text style={styles.head}>AGENDA URGENTE</Text>
      </TouchableOpacity>

      <Text />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ALugaro', {
            from: 'Drawer',
          })
        }}
      >
        <Text style={styles.head}>LÚGARO 2020</Text>
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
