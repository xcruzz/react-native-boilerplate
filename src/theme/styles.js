'use-strict'
import { StyleSheet } from 'react-native'
import { colors } from 'theme'

const homePage = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.white,
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
    fontSize: 24,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.black,
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
})

const svgMap = StyleSheet.create({
  root: {
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
  canvas: {
    backgroundColor: colors.black,
  },
  centeredView: {
    flex: 1,
    marginTop: 22,
  },
  towns: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    textAlign: 'center',
    fontSize: 22,
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
  modalView: {
    // height: '100%',
    // width: '100%',
    // margin: 10,

    flex: 1,
    justifyContent: 'center',

    //backgroundColor: colors.pink,
    // padding: 25,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 15,
    transform: [{ rotate: '270deg' }],
  },
})

export default {
  homePage,
  detailsPage,
  drawerMenu,
  articlePage,
  activeDisplay,
  mapPage,
  svgMap,
  stacks,
}