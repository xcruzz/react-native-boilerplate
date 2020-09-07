import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Button from 'components/Button'
import ActiveDisplay from 'components/ActiveDisplay'
import PhotoAnalizer from 'components/PhotoAnalizer'
import { colors, images } from 'theme'

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
    <ActiveDisplay
      title="EL AUDITOR"
      activityDisplay={images.logo_mono}
      onPress={() => {}}
    />

    <Text style={styles.text}>
      Sube una foto a ver si el auditor le encuentra algo...
    </Text>
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
