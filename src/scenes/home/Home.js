import ActiveDisplay from 'components/ActiveDisplay'
import globalStyles from '../../theme/styles'
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar } from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = globalStyles.homePage

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text />
    <ActiveDisplay />
    <Text />
    <Button
      title="AGENDA URGENTE!"
      color="white"
      style={styles}
      backgroundColor={colors.darkGray}
      onPress={() => {
        navigation.navigate('Details', {
          from: 'Home',
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
