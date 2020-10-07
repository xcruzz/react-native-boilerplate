import globalStyles from '../../theme/styles'
import React from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar, StyleSheet } from 'react-native'
import SVGMap from 'components/SVGMap'

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
})

const Map = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <View>
      <SVGMap navigation={navigation} />
    </View>
  </View>
)

Map.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Map.defaultProps = {
  navigation: { navigate: () => null },
}

export default Map
