import globalStyles from '../../theme/styles'
import React from 'react'
import PropTypes from 'prop-types'
import { View, StatusBar } from 'react-native'
import SVGMap from 'components/SVGMap'

const styles = globalStyles.mapPage

const Map = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <SVGMap pNavigation={navigation} />
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
