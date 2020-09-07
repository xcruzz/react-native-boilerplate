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
    backgroundColor: colors.negro,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <ActiveDisplay
      title="MOVIMIENTO VICTORIA CIUDADANA"
      activityDisplay={images.spinner_arcoiris}
      onPress={() => {}}
    />
    <Button
      title="Agenda Urgente"
      color="white"
      backgroundColor={colors.darkGris}
      onPress={() => {
        navigation.navigate('Details', {
          from: 'Inicio',
          articleKey: 'agenda_urgente',
        })
      }}
    />
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
