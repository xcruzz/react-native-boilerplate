import PropTypes from 'prop-types'
import globalStyles from '../../theme/styles'
import React from 'react'
import DistrictGrid from '../../components/DistrictGrid'
import NationalGrid from '../../components/NationalGrid'
import { View, StatusBar } from 'react-native'

const styles = globalStyles.candibrowser

const CandiBrowser = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <View>
      <DistrictGrid navigation={navigation}></DistrictGrid>
      {/* <NationalGrid></NationalGrid> */}
    </View>
  </View>
)

CandiBrowser.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

CandiBrowser.defaultProps = {
  navigation: { navigate: () => null },
}

export default CandiBrowser
