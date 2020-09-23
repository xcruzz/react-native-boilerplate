'use-strict'
import { Dimensions, StyleSheet } from 'react-native'
import { colors } from 'theme'

const deviceSize = Dimensions.get('window')
const orientation = '90deg'

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
    fontFamily: 'HelveticaNeue-Light',
    color: colors.white,
  },
  logo: {
    width: 150,
    height: 70,
  },
  display: {
    width: deviceSize.width,
    height: 157,
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
    transform: [{ rotate: orientation }],
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
    transform: [{ rotate: orientation }],
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

const agendaUrgente = StyleSheet.create({
  holder: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  header: {
    fontFamily: 'HelveticaNeue-Light',
    textAlign: 'center',
    //fontWeight: 'bold',
    fontSize: 45,
    //color: colors.pink,
    paddingLeft: 10,
    paddingRight: 10,
  },
  title: {
    fontFamily: 'HelveticaNeue-Light',
    textAlign: 'center',
    fontSize: 22,
    //color: 'green',
    paddingLeft: 12,
    paddingRight: 12,
  },
  content: {
    //color: 'red',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Light',
  },
  center: {
    //color: 'blue',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'HelveticaNeue-Medium',
  },
  topic: {
    //color: 'purple',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    textAlign: 'left',
    fontWeight: 'bold',
    fontFamily: 'HelveticaNeue-Medium',
  },
})

const newsFeed = StyleSheet.create({
  holder: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  header: {
    fontFamily: 'HelveticaNeue-Light',
    fontWeight: 'bold',
    fontSize: 28,
    color: colors.black,
    paddingLeft: 10,
    paddingRight: 10,
  },
  content: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 18,
    fontFamily: 'HelveticaNeue-Light',
  },
  center: {
    alignSelf: 'center',
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 20,
    fontFamily: 'HelveticaNeue-Light',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    color: colors.white,
  },
  logo: {
    width: 150,
    height: 70,
  },
  image: {
    alignItems: 'center',
    width: deviceSize.width,
    height: 320,
  },
  backgroundImg: {
    width: 350,
    height: 140,
  },
  separator: {
    alignSelf: 'center',
    height: 1,
    width: '95%',
    backgroundColor: colors.victoryGold,
  },
})

const townInfo = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  verb: {
    fontSize: 18,
    marginBottom: 20,
  },
  logo: {
    width: 54,
    height: 60,
  },
  content: {
    width: deviceSize.width * 0.98,
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
  townInfo,
  newsFeed,
  agendaUrgente,
}
