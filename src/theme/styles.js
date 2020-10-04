'use-strict'
import { Dimensions, StyleSheet } from 'react-native'
import { colors } from 'theme'

const deviceSize = Dimensions.get('window')
const orientation = '90deg'

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
    fontFamily: 'HelveticaNeue-Light',
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
    fontFamily: 'AvenirNextCondensed-Regular',
  },
  content: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 22,
    fontFamily: 'AvenirNextCondensed-Regular',
    textAlign: 'left',
  },
  candName: {
    fontFamily: 'AvenirNext-Bold',
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
    fontFamily: 'AvenirNextCondensed-Regular',
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
    fontFamily: 'AvenirNextCondensed-Regular',
  },
  boxTB: {
    paddingStart: 10,
    fontSize: 29,
    color: colors.white,
    paddingLeft: 10,
    fontFamily: 'AvenirNextCondensed-Bold',
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
    fontFamily: 'HelveticaNeue-Light',
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
const townCandidates = StyleSheet.create({
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 26,
    marginBottom: 0,
    fontFamily: 'AvenirNext-Regular',
  },
  logo: {
    width: 30,
    height: 34,
    marginBottom: 5,
    marginRight: 10,
  },

  center: {
    alignSelf: 'center',
    paddingTop: 5,
    // paddingRight: 10,
    // paddingLeft: 10,
    paddingBottom: 20,
    fontSize: 25,
    fontFamily: 'AvenirNextCondensed-Regular',
  },
  content: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 22,
    fontFamily: 'AvenirNextCondensed-Regular',
    textAlign: 'left',
  },
})
const candiTile = StyleSheet.create({
  holder: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.white,
    width: '100%',
  },
  candName: {
    fontFamily: 'AvenirNext-Bold',
    fontSize: 38,
    color: colors.black,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 20,
    textAlign: 'right',
  },
  candTitle: {
    alignSelf: 'flex-end',
    fontSize: 22,
    paddingEnd: 10,
    fontFamily: 'AvenirNextCondensed-Regular',
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
    marginTop: 10,
    marginBottom: 15,
    elevation: 5,
  },
  separator: {
    alignSelf: 'center',
    height: 1,
    width: '95%',
    backgroundColor: colors.victoryGold,
  },
  textB: { marginTop: 10, fontSize: 24, paddingLeft: 10 },
  boxT: {
    paddingStart: 10,
    fontSize: 28,
    color: colors.white,
    paddingLeft: 10,
    fontFamily: 'AvenirNextCondensed-Regular',
  },
  boxTB: {
    paddingStart: 10,
    fontSize: 29,
    color: colors.white,
    paddingLeft: 10,
    fontFamily: 'AvenirNextCondensed-Bold',
  },
  box: {
    backgroundColor: colors.black,
    color: colors.white,
    paddingLeft: 10,
    borderTopWidth: 10,
  },
  profilePic: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    backgroundColor: colors.white,
  },
  profilePicDim: {
    width: 230,
    height: 230,
  },
  content: {
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 22,
    fontFamily: 'AvenirNextCondensed-Regular',
    textAlign: 'left',
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
  townInfo,
  newsFeed,
  agendaUrgente,
  districtInfo,
  welcomeScreen,
  candibrowser,
  townCandidates,
  candiProfile,
}
