import globalStyles from '../../theme/styles'
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar } from 'react-native'
import SVGMap from 'components/SVGMap'

const styles = globalStyles.mapPage

const Map = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <Text />
    <View style={styles.container}>
      <SVGMap pNavigation={navigation} />
    </View>
    <Text />
    <Text />
  </View>
)

Map.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Map.defaultProps = {
  navigation: { navigate: () => null },
}

export default Map
