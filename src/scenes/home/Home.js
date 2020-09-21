import AButton from '../../components/ALugaroButton'
import ActiveDisplay from 'components/ActiveDisplay'
import globalStyles from '../../theme/styles'
import React from 'react'
import PropTypes from 'prop-types'
import { Text, View, StatusBar, ImageBackground } from 'react-native'
import { images } from 'theme'

const styles = globalStyles.alugaro

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text style={styles.verb}>{'\n\n\n\n\n'}</Text>
    <ActiveDisplay />
    <Text style={styles.verb} />
    <Text style={styles.verb} />
    <AButton
      title="Agenda Urgente"
      onPressURL="https://www.alexandralugaro2020.com/agendaurgente"
      onPressNavigate={navigation}
      navigationProps={{
        from: 'Home',
        articleKey: 'agenda_urgente',
      }}
    />
    <Text style={styles.verb}>{'\n\n\n\n\n'}</Text>
    <View style={{ flex: 0 }}>
      <ImageBackground
        style={styles.backgroundImg}
        source={images.victoria_final}
      ></ImageBackground>
    </View>
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
