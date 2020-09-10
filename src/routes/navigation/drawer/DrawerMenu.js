import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, SafeAreaView, Text } from 'react-native'
import { DrawerActions } from 'react-navigation-drawer'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native'
import { colors } from 'theme'

const styles = {
  root: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    fontSize: 20,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'left',
    paddingLeft: 20,
  },
  collapse: {
    paddingLeft: 4,
  },
  collapseH: {
    flexDirection: 'row',
    padding: 0,
  },
  collapseB: { backgroundColor: colors.lightGray },
}

const cands = [
  {
    title: 'Alexandra Lúgaro',
    key: 'lugaro2020',
  },
  {
    title: 'MAnuel Natal Albelo',
    key: 'natal2020',
  },
]

const rdr = [
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

const DrawerMenu = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.gray}
        backgroundColor={colors.blanco} //"white"
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>
    <View style={styles.main}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            from: 'Drawer',
            articleKey: 'agenda_urgente',
          })
        }}
      >
        <Text style={styles.head}> AGENDA URGENTE!</Text>
      </TouchableOpacity>
      <Text />
      <View style={styles}>
        <Collapse style={styles.collapse}>
          <CollapseHeader>
            <Text style={styles.head}>RED DE REDES</Text>
          </CollapseHeader>
          <CollapseBody st>
            <Text />
            {rdr.map((i) => {
              return (
                <View key={i.key}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Details', {
                        from: 'Drawer',
                        articleKey: i.key,
                      })
                    }}
                  >
                    <Text> {i.title}</Text>
                    <Text />
                  </TouchableOpacity>
                </View>
              )
            })}
          </CollapseBody>
        </Collapse>
      </View>
      <Text />
      <View style={styles}>
        <Collapse style={styles.collapse}>
          <CollapseHeader>
            <Text style={styles.head}>CANDIDATXS</Text>
          </CollapseHeader>
          <CollapseBody st>
            <Text />
            {cands.map((i) => {
              return (
                <View key={i.key}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Details', {
                        from: 'Drawer',
                        articleKey: i.key,
                      })
                    }}
                  >
                    <Text> {i.title}</Text>
                    <Text />
                  </TouchableOpacity>
                </View>
              )
            })}
          </CollapseBody>
        </Collapse>
      </View>
    </View>
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
