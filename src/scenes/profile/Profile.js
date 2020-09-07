import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, StatusBar } from 'react-native'
import Button from 'components/Button'
import ActiveDisplay from 'components/ActiveDisplay'
import { colors } from 'theme'
import { images } from 'theme'

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

const Profile = ({ navigation }) => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" />
    <ActiveDisplay
      title="El Auditor"
      activityDisplay={images.logo_mono}
      onPress={() => {}}
    />
    <Text style={styles.text}>
      Sube una foto a ver si el auditor le encuentra algo...
    </Text>
    <Text style={styles}></Text>
    <Button
      title="Go to Details"
      color="white"
      backgroundColor={colors.gray}
      onPress={() => {
        navigation.navigate('Details', { from: 'Profile' })
      }}
    />
  </View>
)

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
