'use-strict'
import { Dimensions, StyleSheet } from 'react-native'
import { colors } from 'theme'

const deviceSize = Dimensions.get('window')

const alugaro = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  au_root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  agenda_urgente: { width: deviceSize.width, height: 4652 },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.white,
  },
  logo: {
    width: 150,
    height: 70,
  },
  display: {
    width: 300,
    height: 130,
  },
  display_lugaro: {
    width: deviceSize.width * 0.9,
    height: 150,
  },
  icon: {
    width: 60,
    height: 30,
  },
  backgroundImg: {
    width: 350,
    height: 140,
  },
})

const detailsPage = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.black,
    textAlign: 'center',
  },
})

const stacks = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
  logo90: {
    width: 32,
    height: 32,
    transform: [{ rotate: '270deg' }],
  },
})

const drawerMenu = StyleSheet.create({
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
    alignItems: 'center',
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
})

const articlePage = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: '#fff',
    paddingLeft: 6,
  },
  articleTitle: {
    fontSize: 24,
    color: colors.black,
    paddingBottom: 25,
  },
  title: {
    fontSize: 23,
    color: colors.black,
  },
  verb: {
    fontSize: 22,
  },
  head: {
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  list: {
    fontSize: 18,
    textDecorationLine: 'none',
    paddingTop: 20,
  },
  logo: {
    width: 108,
    height: 120,
  },
  collapse: {
    backgroundColor: colors.victoryGold,
    borderColor: colors.black,
  },
  collapseH: {
    flexDirection: 'row',
    borderWidth: 1.5,
  },
  collapseB: {
    backgroundColor: colors.white,
    paddingBottom: 20,
    paddingTop: 5,
  },
})

const navigation = StyleSheet.create({
  nav_icon: {
    width: 20,
    height: 22,
  },
})

const activeDisplay = StyleSheet.create({
  container: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
  },
  logo: {
    width: 108,
    height: 120,
  },
})

const mapPage = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.black,
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
    backgroundColor: colors.black,
    transform: [{ rotate: '270deg' }],
  },
  foot: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 0,
    alignItems: 'center',
    backgroundColor: colors.black,
    height: 45,
  },
  onePicker: {
    width: 200,
    height: 44,
    backgroundColor: colors.darkGray,
    borderColor: colors.white,
    borderWidth: 1,
  },
  onePickerItem: {
    height: 45,
    color: colors.white,
  },
})

export default {
  detailsPage,
  drawerMenu,
  articlePage,
  activeDisplay,
  mapPage,
  stacks,
  navigation,
  alugaro,
}
