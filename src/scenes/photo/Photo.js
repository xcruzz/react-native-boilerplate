import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, StatusBar } from 'react-native'
import PhotoAnalizer from 'components/PhotoAnalizer'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGris,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
    color: 'white',
    alignContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
})

const Photo = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <PhotoAnalizer />
  </View>
)

Photo.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Photo.defaultProps = {
  navigation: { navigate: () => null },
}

export default Photo
