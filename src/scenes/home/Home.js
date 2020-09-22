import globalStyles from '../../theme/styles'
import React from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  ScrollView,
} from 'react-native'
import { images } from 'theme'

const styles = globalStyles.alugaro

const Home = ({ navigation }) => (
  <View style={styles.au_root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.verb} />
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flex: 0 }}>
        <ImageBackground
          style={styles.agenda_urgente}
          source={images.agenda_urgente}
        />
      </View>
    </ScrollView>
    <Text />
    <ImageBackground style={styles.display} source={images.victoria_final} />
  </View>
)

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

Home.defaultProps = {
  navigation: { navigate: () => null },
}

export default Home
