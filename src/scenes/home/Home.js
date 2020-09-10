import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, View, StatusBar, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
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

const list = [
  {
    title: 'Juventud',
    key: 'juventud',
  },
  {
    title: 'Diáspora',
    key: 'diaspora',
  },
  {
    title: 'Ecomonomía y Empresarismo',
    key: 'economia',
  },
  {
    title: 'Género y LGBTTIQ',
    key: 'lgbttiq',
  },
  {
    title: 'Educación',
    key: 'educacion',
  },
  {
    title: 'Ecología!',
    key: 'ecologia',
  },
  {
    title: 'Comunicaciones',
    key: 'comunicaciones',
  },
  {
    title: 'Cultura',
    key: 'cultura',
  },
  {
    title: 'Salud',
    key: 'salud',
  },
  {
    title: 'Gobierno y Administración Pública',
    key: 'gobierno',
  },
  {
    title: 'Recreación y Deportes',
    key: 'deportes',
  },
  {
    title: 'Desigualdad y Comunidad',
    key: 'desigualdad',
  },
  {
    title: 'Sindicatos y Colegiaciones',
    key: 'sindicatos',
  },
]

const Home = ({ navigation }) => (
  <View style={styles.root}>
    <StatusBar barStyle="light-content" />
    <Text />
    <ActiveDisplay
      title="MOVIMIENTO VICTORIA CIUDADANA"
      activityDisplay={images.logo_blanco}
      onPress={() => {}}
    />
    <Button
      title="EL AUDITOR"
      color="white"
      backgroundColor={colors.gray}
      onPress={() => {
        navigation.navigate('Photo', {
          from: 'Inicio',
        })
      }}
    />
    <Text />
    <Button
      title="AGENDA URGENTE!"
      color="white"
      backgroundColor={colors.gray}
      onPress={() => {
        navigation.navigate('Details', {
          from: 'Inicio',
          articleKey: 'agenda_urgente',
        })
      }}
    />
    <Text />
    <View style={styles.root}>
      <ScrollView>
        {list.map((i) => {
          return (
            <View key={i.key}>
              <Button
                title={i.title}
                color="white"
                backgroundColor={colors.negro}
                onPress={() => {
                  navigation.navigate('Details', {
                    from: 'Inicio',
                    articleKey: i.key,
                  })
                }}
              />
              <Text />
            </View>
          )
        })}
      </ScrollView>
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
