import globalStyles from '../../../theme/styles'
import React from 'react'
import PropTypes from 'prop-types'
import {
  TouchableOpacity,
  View,
  SafeAreaView,
  Image,
  Linking,
} from 'react-native'
import { images } from 'theme'

const styles = globalStyles.drawerMenu

const DrawerMenu = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          Linking.openURL('https://www.alexandralugaro2020.com/')
        }}
      >
        <Image style={styles.display_lugaro} source={images.alugaro_2020} />
      </TouchableOpacity>
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
