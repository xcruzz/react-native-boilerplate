'use-strict'
import { Dimensions, StyleSheet } from 'react-native'
import { colors, fonts } from 'theme'

const deviceSize = Dimensions.get('window')

const welcomeScreen = StyleSheet.create({
  modalView: {
    backgroundColor: colors.black,
    alignItems: 'center',
  },
  modalImage: {
    width: deviceSize.width,
    height: deviceSize.width * 1.95,
  },
})

const stacks = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
})

const drawerMenu = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
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
    backgroundColor: colors.black,
  },
  collapse: {
    paddingLeft: 4,
  },
  display_lugaro: {
    width: 150,
    height: 68,
    marginVertical: 5,
    marginBottom: 10,
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

const agendaUrgente = StyleSheet.create({
  holder: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  header: {
    fontFamily: fonts.NeuePlak.Bold,
    textAlign: 'center',
    fontSize: 36,
    paddingHorizontal: 10,
  },
  title: {
    marginBottom: 5,
    fontFamily: fonts.NeuePlak.Bold,
    textAlign: 'center',
    fontSize: 22,
    paddingHorizontal: 5,
  },
  content: {
    paddingHorizontal: 12,
    fontSize: 20,
    fontFamily: fonts.NeuePlak.Regular,
  },
  center: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: fonts.NeuePlak.Black,
  },
  topic: {
    paddingHorizontal: 10,
    fontSize: 18,
    textAlign: 'left',
    fontFamily: fonts.NeuePlak.Black,
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
    // fontFamily: 'HelveticaNeue-Light',
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
    // fontFamily: 'HelveticaNeue-Light',
  },
  center: {
    alignSelf: 'center',
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 20,
    // fontFamily: 'HelveticaNeue-Light',
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
    width: '100%',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 140,
  },
  title: {
    fontSize: 26,
    marginBottom: 20,
    // fontFamily: 'HelveticaNeue-Light',
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

const districtInfo = StyleSheet.create({
  holder: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
    width: '100%',
  },
  center: {
    alignSelf: 'center',
    paddingTop: 5,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    fontSize: 20,
    // // fontFamily: 'AvenirNextCondensed-Regular',
  },
  content: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 22,
    // // fontFamily: 'AvenirNextCondensed-Regular',
    textAlign: 'left',
  },
  candName: {
    // fontFamily: 'AvenirNext-Bold',
    fontSize: 38,
    color: colors.black,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'right',
  },
  candTitle: {
    alignSelf: 'flex-end',
    fontSize: 22,
    paddingEnd: 10,
    // // fontFamily: 'AvenirNextCondensed-Regular',
  },
  candidatureBar: {
    alignSelf: 'center',
    height: 34,
    alignContent: 'flex-end',
    justifyContent: 'center',
    textAlign: 'right',
    width: deviceSize.width * 0.98,
    backgroundColor: colors.victoryGold,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  separator: {
    alignSelf: 'center',
    height: 1,
    width: '95%',
    backgroundColor: colors.victoryGold,
  },
  textB: { fontSize: 24, paddingLeft: 10 },
  boxT: {
    paddingStart: 10,
    fontSize: 28,
    color: colors.white,
    paddingLeft: 10,
    // // fontFamily: 'AvenirNextCondensed-Regular',
  },
  boxTB: {
    paddingStart: 10,
    fontSize: 29,
    color: colors.white,
    paddingLeft: 10,
    // fontFamily: 'AvenirNextCondensed-Bold',
  },
  box: {
    backgroundColor: colors.black,
    color: colors.white,
    paddingLeft: 10,
    borderTopWidth: 10,
  },
})

const candibrowser = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.white,
    marginLeft: 10,
    marginRight: 10,
  },
  head: {
    fontSize: 26,
    // fontFamily: 'HelveticaNeue-Light',
    paddingStart: 10,
    backgroundColor: colors.victoryGold,
  },
  tiles: { flex: 0, flexDirection: 'column', justifyContent: 'space-around' },
  rows: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  tile: {
    width: 100,
    height: 100,
    backgroundColor: colors.gray,
  },
  separator: {
    alignSelf: 'center',
    height: 2,
    width: '95%',
    backgroundColor: colors.white,
  },
})
export default {
  drawerMenu,
  articlePage,
  activeDisplay,
  stacks,
  navigation,
  townInfo,
  newsFeed,
  agendaUrgente,
  districtInfo,
  welcomeScreen,
  candibrowser,
}
